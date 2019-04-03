const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const path = require('path');

const directoryToServe = 'public'; 
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  // middleware
// app.use(express.static('./public'));  // middleware
app.use('/', express.static(path.join(__dirname, directoryToServe)));



const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', '24486798_www.example.com.cert')),
  key:  fs.readFileSync(path.join(__dirname, 'ssl', '24486798_www.example.com.key')),
};

app.get('/submitForm/', (req, res) => {
  res.send(`
    <h1>Formulaire envoyé avec data :</h1>
    <p> ${req.query.username} / ${req.query.password} / ${req.query.date} / ${req.method}
    `
    );  
});

app.post('/submitForm/', (req, res) => {  
  let data = req.body;
  res.send(`
    <h1>Formulaire envoyé avec data :</h1>
    <p> ${data.username} / ${data.password} / ${data.date} / ${req.method}
    `
    );  
});


https.createServer(httpsOptions, app)
  .listen(port, () => {
    console.log(`Serving the ${directoryToServe} directory at https://localhost:${port}`);

    
  });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });


