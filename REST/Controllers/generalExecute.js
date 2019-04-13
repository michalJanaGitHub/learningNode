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

  let eRId = 'eRId:' + new Date().toISOString() + ':' + Math.round(1000*Math.random()); // fabricating a unique ID 
  let requestHeader = {
    eRId : eRId,
    requestName : req.url,
    appName : appName,
    userName : userName,
    dateTime : dateTime,
  };
 
  try {
    if (!reqBody) throw new Error('Input not valid');
    let parsedBody = gf.urlToJsonD(decodeURI(reqBody));
    if (parsedBody) {
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