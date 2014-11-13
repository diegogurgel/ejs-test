var ejs = require('ejs');
var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render('index',{name:'diego'});
});

app.listen(8080,function(){
	console.log('listen at port 8080');
});