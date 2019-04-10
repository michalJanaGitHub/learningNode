const dbExecute = require('../core/dbExecute.js');
const httpMssgs = require('../core/httpMssgs.js');
const settings = require('../settings.js');
const user = require('../core/user.js');
const gf = require('../core/generalFunctions.js');
const url = require('url');


let executeRequest = (req, res, reqBody) => {

  const appName = settings.appName;
  const userName = user.userName;
  const dateTime = new Date();
  
  let requestHeader = {
    appName : appName,
    userName: userName,
    dateTime: dateTime
  };

  try {
    if (!reqBody) throw new Error('Input not valid');
    parsedBody = gf.urlToJsonD(decodeURI(reqBody));
    if (parsedBody) {

      dbExecute.executeRequest( requestHeader, parsedBody, (result, err) => {       
        if (err) {
          httpMssgs.show500(req,res,err);
        }
        else {
          httpMssgs.sendJSON(req,res,result);
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