const dbExecute = require('../core/dbExecute.js');
const httpMssgs = require('../core/httpMssgs.js');
const settings = require('../../settings.js');
const user = require('../../Users/user.js');
const gf = require('../core/generalFunctions.js');
const logger = require('../../logger.js');

let executeRequest = (req, res, reqBody) => {

  const appName = settings.appName;
  const userName = user.userName;
  const dateTime = new Date();

  console.log(reqBody);

  let requestHeader = {};
  requestHeader.requestID = '';
  requestHeader.requestName = req.url;
  requestHeader.appName = appName;
  requestHeader.userName = userName;
  requestHeader.dateTime = dateTime;
 
  try {
    if (!reqBody) throw new Error('Input not valid');
    let parsedBody = gf.urlToJsonD(decodeURI(reqBody));
    if (parsedBody) {
      
      let ERID = logger.executeRequest(requestHeader, parsedBody);
      requestHeader.requestID = ERID;
      dbExecute.executeRequest(requestHeader, parsedBody, (result, err) => {       
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
 
  if (req.url.match(/^\/execute\/[A-Za-z0-9]{3,25}/)) {
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