var http    = require('http'),
    express =  require('express');
var football = require('./index.js');

var app = express();

var allData = new football();

app.get('/', function (req, res) {
    res.json(allData);
    // res.success();
});
http.createServer(app).listen(3000);