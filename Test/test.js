var express = require('express');

var app = express();

app.use('');

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000,'192.168.0.102');