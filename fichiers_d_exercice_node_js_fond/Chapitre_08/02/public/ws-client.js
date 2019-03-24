var ws = new WebSocket('ws://localhost:3000');

ws.onopen = function () {
    setTitle('Connected to chat');
}

ws.onclose = function () {
    setTitle('DISCONNECTED');
}

ws.onmessage = function (message) {
    printMessage(message);
}

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    ws.send(input.value);
    input.value = '';
};
 
function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}
 
function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message.data;
    document.querySelector('div.messages').appendChild(p);
}