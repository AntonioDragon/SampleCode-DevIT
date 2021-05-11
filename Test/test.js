var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req,res){
    res.render('pages/index')
});

app.get('/formReg',function(req,res){
    res.render('pages/formReg')
});

app.listen(3000,'192.168.0.102');