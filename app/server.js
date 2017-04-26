const   http    = require('http'),
        express =  require('express'),
        football = require('./index.js'),
        app = express(),
        allData = football(); // data from the app (dataLOgs)

app.get('/', (req, res) => {
    res.status(200);
    res.json(allData);
    res.end();
});
http.createServer(app).listen(8080); //listen for connection on this port