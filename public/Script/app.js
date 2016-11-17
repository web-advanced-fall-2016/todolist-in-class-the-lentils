let http = require('http');
let express = require('express');

let port = 8000;

let app = express();
let server = http.createServer(app);
server.listen(port);
