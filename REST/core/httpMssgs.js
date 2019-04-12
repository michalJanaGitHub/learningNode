const fs = require('fs');
const path = require('path');
const settings = require('../../settings.js');

let serveStaticFile = (req, res, fileName) => {

  let relPath = '';
  
  if (!fileName)  relPath = req.url;
  else  relPath = fileName;    

  const fullPath = path.join(__dirname + '/../..', 'public', relPath);

  const extension = path.parse(relPath).ext;
  const contentTypeMap = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
  };
  const contentType = contentTypeMap[extension] || 'text/plain';
  if (!fs.existsSync(fullPath)) {
      // if the file is not found, return 404
      console.log('/ if the file is not found, return 404');
      show404(req, res);      
      return;
  }
  
  // read file from file system
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      console.log(err);
      show500(req, res, err);
    } else {
      // if the file is found, set Content-type and send data
      // res.setHeader('Content-type', map[extension] || 'text/plain');
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
};
exports.serveStaticFile = serveStaticFile;

exports.showHome = (req, res) => {
  if (settings.httpMssgsFormat === "HTML") {
    serveStaticFile(req, res, 'index.html');    
  }
  else if (settings.httpMssgsFormat === "JSON"){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify(
        [{ "JSON Homepage": "not finished yet" }]
      )
    );
    res.end(); 
  }
};

let sendJSON = (req, res, data) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  if (data) {
    res.end(JSON.stringify(data));
    // res.write(JSON.stringify(data.recordsets)); 
    // res.write(JSON.stringify(data.recordsets[0])); 
  }
  else {
    res.end();
  }
};
exports.sendJSON = sendJSON;


let send200 = (req, res, err) => {
    res.writeHead(200,{ "Content-Type": "text/html" });
    res.end();
};
exports.send200 = send200;

let show500 = (req, res, err) => {  //internal error
  if (settings.httpMssgsFormat === "HTML") {
    res.writeHead(500, "internal Error occurred", { "Content-Type": "text/html" });
    res.write(`
      <html>
      <head>
        <title>500</title>
      </head>
      <body>
        550: Internal error. Details: ${err}
      </body>
      </html>`);
    
  }
  else if (settings.httpMssgsFormat === "JSON"){
    res.writeHead(500, "internal Error occurred",
        { "Content-Type": "application/json" });
    res.write(JSON.stringify({data: "ERROR occurred:" + err}));
  }
  res.end();    
};
exports.show500 = show500;

let show405 = (req, res) => {   //method not supported
  if (settings.httpMssgsFormat === "HTML") {  
    res.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
    res.write(`
      <html>
      <head>
        <title>405</title>
      </head>
      <body>
        405: Method not supported
      </body>
      </html>`);
    
  }
  else if (settings.httpMssgsFormat === "JSON"){
    res.writeHead(405, "Method not supported",
        { "Content-Type": "application/json" });
    res.write(JSON.stringify({"data": "Method not supported"}));
  }
  res.end();    
};
exports.show405 = show405;

let show404 = (req, res) => {   // Resource not found
  if (settings.httpMssgsFormat === "HTML") {
    res.writeHead(404, "Not fount", { "Content-Type": "text/html" });
    res.write(`
      <html>
      <head>
        <title>404</title>
      </head>
      <body>
        404: Resource not fount
      </body>
      </html>`);
    
  }
  else if (settings.httpMssgsFormat === "JSON"){
    res.writeHead(404, "Resource not fount",
        { "Content-Type": "application/json" });
    res.write(JSON.stringify({"data": "Resource not fount"}));
  }
  res.end();    
};
exports.show404 = show404;

let show413 = (req, res) => {   //Request entity too large
  if (settings.httpMssgsFormat === "HTML") {
    res.writeHead(413, "Request entity too large", { "Content-Type": "text/html" });
    res.write(`
      <html>
      <head>
        <title>413</title>
      </head>
      <body>
      413: Request entity too large
      </body>
      </html>`);
    
  }
  else if (settings.httpMssgsFormat === "JSON"){
    res.writeHead(413, "Request entity too large",
        { "Content-Type": "application/json" });
    res.write(JSON.stringify({"data": "Request entity too large"}));
  }
  res.end();    

};
exports.show413 = show413;