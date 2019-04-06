const http = require('http');
const emp = require('../controllers/employee.js');
const httpMssgs = require('./httpMssgs.js');
const settings = require('../settings.js');
const port = settings.webPort;

http.createServer((req, res) => {
  switch (req.method) {
    case "GET":       //select
      if (req.url === '/') {
        httpMssgs.showHome(req, res);
      }
      else if (req.url === '/employees') {
        emp.getList(req, res);
      }
      else {
        let empNoPattern = "[0-9]+";
        let regExp = new RegExp("/employees/" + empNoPattern);
        if (regExp.test(req.url)) {
          regExp = new RegExp(empNoPattern);
          let empNo = regExp.exec(req.url);
          emp.get(req, res, empNo);          
        }
        else {
          httpMssgs.show404(req, res);
        }
        
      }
      break;
    case "POST":      //insert
      if (req.url === '/employees') {
        let reqBody = '';
        req.on('data', (data) => {
          reqBody += data;
          if (reqBody.length > 1e7) { //10MB
            httpMssgs.show413(req, res);  // too large
          }
        });

        req.on('end', () => {
          emp.add(req, res, reqBody);
        });
      }
      else {
        httpMssgs.show404(req, res);
      }
      break;
    case "PUT":       //update
      if (req.url === '/employees') {
        let reqBody = '';
        req.on('data', (data) => {
          reqBody += data;
          if (reqBody.length > 1e7) { //10MB
            httpMssgs.show413(req, res);  // too large
          }
        });

        req.on('end', () => {
          emp.update(req, res, reqBody);
        });
      }
      else {
        httpMssgs.show404(req, res);
      }
      break;
    case "DELETE":    //delete
      if (req.url === '/employees') {
        let reqBody = '';
        req.on('data', (data) => {
          reqBody += data;
          if (reqBody.length > 1e7) { //10MB
            httpMssgs.show413(req, res);  // too large
          }
        });

        req.on('end', () => {
          emp.delete(req, res, reqBody);
        });
      }
      else {
        httpMssgs.show404(req, res);
      }
      break;
    default:
      httpMssgs.show405(req, res);
      break;      
  }

}).listen(port, () => {
  console.log(`listening at ${port}`);
} );

