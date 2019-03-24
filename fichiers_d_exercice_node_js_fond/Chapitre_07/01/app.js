var webSocketServer = require('ws').Server;
var wss = new webSocketServer({port: 3000});

wss.on('connection', (ws) => {
    console.log('Connected');
    ws.send('Welcome!');
});