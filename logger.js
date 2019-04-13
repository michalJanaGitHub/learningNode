let fs = require("fs");
let sett = require('./settings.js');


let options =  {flags: 'a'};

let execRequestsStream = fs.createWriteStream("Logs/executeRequests.txt", options);
let errorStream = fs.createWriteStream("Logs/error.txt", options);
let debugStream = fs.createWriteStream("Logs/debug.txt", options);

exports.debug = (msg) => {
  let message = new Date().toISOString() + " : " + msg + "\n\n";
  debugStream.write(message);
};

exports.error = (msg) => {
  let message = new Date().toISOString() + " : " + msg + "\n\n";
  errorStream.write(message);
};

exports.executeRequest = (eRId, reqHeader, reqBody) => {
  
  if (sett.logExecuteRequests) {
    let message = 
    `\n${eRId}\nRequestHeader:\n${JSON.stringify(reqHeader)}\nRequestBody:\n ${JSON.stringify(reqBody)}\n`;
    execRequestsStream.write(message);
  }
  return eRId;
};

exports.executeRequestResponse = (response) => {
  let eRId = new Date().toISOString();
    
  if (sett.logERResponses) {
    let message =
    `\n${eRId}\n${response}\nResponse:\n${JSON.stringify(response[0])}\n`;
    execRequestsStream.write(message);
  }
};