const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const LISTEN_PORT = 8080;

app.get('/', function(req, res) {
    res.sendFile('index.html', {root:__dirname});
});

app.use(express.static(__dirname));
server.listen(LISTEN_PORT);
console.log('Listening to port ' + LISTEN_PORT);