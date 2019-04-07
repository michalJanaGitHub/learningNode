const dbExecute = require('../core/dbExecute.js');
const httpMssgs = require('../core/httpMssgs.js');
const util = require('util');
const settings = require('../settings.js');



// console.log(reqBody);
// dbExecute.executeRequest('test', 'test', 'desc', (result) => {
//   console.log(result);
// });


let executeRequest = (req, res, reqBody) => {
  try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {    
      dbExecute.executeRequest('test', 'test', 'desc', (result, err) => {       
        if (err) {
          httpMssgs.show500(req,res,err);
        }
        else {
          httpMssgs.sendJSON(req,res,result);
          // httpMssgs.send200(req,res);
        }        
      });     
    }
    else throw new Error('Input not valid');
  }
  catch(ex) {
    httpMssgs.show500(req, res, ex);
  } 

};



exports.respondToPOST = (req, res) => {  // select
 
  if (req.url === '/execute') {
    let reqBody = '';
    req.on('data', (data) => {
      reqBody += data;
      if (reqBody.length > 1e7) { //10MB
        httpMssgs.show413(req, res);  // too large
      }
    });  
    req.on('end', () => {
      executeRequest(req, res, reqBody);
    });  
  }
  else {
      httpMssgs.show404(req, res);
  }    


};

