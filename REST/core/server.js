const http = require('http');
const emp = require('../Controllers/employees.js');
const httpMssgs = require('./httpMssgs.js');
const settings = require('../settings.js');
const port = settings.webPort;

let forwardGET = (req, res) => {
  if (req.url === '/')
    httpMssgs.showHome(req, res);
  else if (req.url.match(/employees/))
    emp.respondToGet(req, res);
};
let forwardPOST = (req, res) => {
  if (req.url === '/employees')
    emp.respondToPOST(req, res);
  else
    httpMssgs.show404(req, res);
};
let forwardPUT = (req, res) => {
  if (req.url === '/employees')
    emp.respondToPUT(req, res);
  else
    httpMssgs.show404(req, res);
};
let forwardDELETE = (req, res) => {
  if (req.url === '/employees')
    emp.respondToDELETE(req, res);
  else
    httpMssgs.show404(req, res);
  
};

http.createServer((req, res) => {
  switch (req.method) {
    case "GET":       //select
      forwardGET(req, res);
      break;
    case "POST":      //insert
      forwardPOST(req, res);
      break;
    case "PUT":       //update
      forwardPUT(req, res);
      break;
    case "DELETE":    //delete
      forwardDELETE(req, res);
      break;
    default:
      httpMssgs.show405(req, res);
      break;      
  }

}).listen(port, () => {
  console.log(`listening at ${port}`);
} );

