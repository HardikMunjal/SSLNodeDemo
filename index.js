var express = require('express');
var fs = require('fs');
var https = require('https');

var app = express();


https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(4011);

    app.get('/', function (req, res) {
    
      return res.send('Hello Bro');
    });

// app.get('/s/', function (req, res) {
//    console.log('coming')
//    res.send('Hello World');
// })

// var options = {
//     key  : fs.readFileSync('key.pem'),
//     ca   : fs.readFileSync('csr.pem'),
//     cert : fs.readFileSync('cert.pem')
// }


// https.createServer(options, app).listen(3000,function() {
//      console.log('Server listening on port', this.address().port);
// })

// var server = app.listen(3000, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })