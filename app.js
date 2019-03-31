const express = require('express');
const bodyParser = require('body-parser');  
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  // middleware
app.use(express.static('./public'));  // middleware

app.get('/hello', (req, res) => {
  console.log(req.query);
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  
  let data = req.body;
  res.send(`
    <h1>Formulaire envoyé avec data :</h1>
    <p> ${data.username} / ${data.password} / ${data.date}    
    `
    );
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

