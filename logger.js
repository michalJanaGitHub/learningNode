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

exports.executeRequest = (reqHeader, reqBody) => {
  
  let logID = 'ERID:' + new Date().toISOString() + ':' + Math.round(100*Math.random()); // fabricating a unique ID 
  if (sett.logExecuteRequests) {
    let message = 
    `\n${logID}\nRequestHeader:\n ${JSON.stringify(reqHeader)}\nRequestBody:\n ${JSON.stringify(reqBody)}\n`;
    execRequestsStream.write(message);
  } 
  return logID;
};