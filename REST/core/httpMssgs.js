let settings = require('../settings.js');

exports.showHome = (req, res) => {
  if (settings.httpMssgsFormat === "HTML") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        Valid endpoints: <br>
        /employees - GET - To list all Employees <br>
        /employees/{empno} - GET - To search for an employee
        
      </body>
      </html>`);
    
  }
  else if (settings.httpMssgsFormat === "JSON"){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify([
      { url: "/employees", operation: "GET", description: "To list all Employees" },
      { url: "/employees/empno", operation: "GET", description: "To search for an employee" },
      
      ]
    ));
  }
  res.end();    
};

exports.sendJSON = (req, res, data) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  if (data) {
    res.write(JSON.stringify(data));  
    // res.write(JSON.stringify(data.recordsets)); 
    // res.write(JSON.stringify(data.recordsets[0])); 
  }
  res.end();    
};
exports.send200 = (req, res, err) => {
    res.writeHead(200,{ "Content-Type": "text/html" });
    res.end();
};
exports.show500 = (req, res, err) => {
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
exports.show405 = (req, res) => {
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
exports.show404 = (req, res) => {
  if (settings.httpMssgsFormat === "HTML") {
    res.writeHead(404, "Resource not fount", { "Content-Type": "text/html" });
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
exports.show413 = (req, res) => {
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