var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Formulaire envoyé');
});

app.listen(3000, () => {
  console.log('Example app listening on port http://localhost:3000');
});