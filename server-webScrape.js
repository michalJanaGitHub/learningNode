let fs = require('fs');
let https = require('https');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let options = {
  hostname: 'fr.wikipedia.org',
  port: 443, //default
  path: '/wiki/Node.js',
  method: 'GET'
};

let req = https.request(options, (res) => {
  let responseBody = '';

  console.log(`Start`);
  // console.log(res.statusCode);
  // console.log(res.headers);

  res.setEncoding('UTF-8');
  
  res.on('data', (chunk) => {
    console.log(chunk.length);
    responseBody += chunk;
  });

  res.on('end', () => {
    fs.writeFileSync('webScrape.html', responseBody);
    console.log('File created');
    
    const dom = new JSDOM( responseBody);
    console.log(dom.window.document.getElementsByTagName("p")[3].textContent);  
    console.log(dom.window.document.querySelectorAll("p")[3].textContent);
  });
});
req.end();



