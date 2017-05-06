const   http    = require('http'),
        express =  require('express'),
        football = require('./index.js'),
        app = express(),
        allData = football(), // data from the app (dataLOgs)
        port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.status(200);
    res.json(allData);
    res.end();
});
http.creatnode eServer(app).listen(port); //listen for connection on this port