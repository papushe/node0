var http    = require('http'),
    express =  require('express'),
    football = require('./index.js');

var app = express();

var allData = football(); // data from the app (dataLOgs)

app.get('/', function (req, res) {
    res.status(200);
    res.json(allData);
    res.end();
});
http.createServer(app).listen(8080); //listen for connection on this port