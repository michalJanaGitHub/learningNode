let fs = require('fs');
let http = require('http');
let data = require('./data/data.json');

let isActive = (inputData) => {
  return inputData.filter((item) => {
    return item.isActive === true;
  });

};
let isInActive = (inputData) => {
  return inputData.filter((item) => {
    return item.isActive === false;
  });
};

let server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(data));
  }
  else if (req.url.match(/isActive$/)) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(isActive(data)));
  }
  else if (req.url.match(/isInActive$/)) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(isInActive(data)));
  }
  else {
    res.end('not found');
  }
  
});

server.listen(3000);

console.log('server on http://localhost:3000');