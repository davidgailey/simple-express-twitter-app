
var express = require('express'),
    port 	= 3000,
    url 	= 'http://localhost:' + port + '/',
    search 	= require('./search'),
    app		= express.createServer();

// express config

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('view options', {layout:false});

console.log(app.set('views'));


//routes

app.get('/', function(req,res){
	res.render('index');

});


//listen

app.listen(port);








/* We can access nodejitsu enviroment variables from process.env */
/* Note: the SUBDOMAIN variable will always be defined for a nodejitsu app */
//if(process.env.SUBDOMAIN){
  //url = 'http://' + process.env.SUBDOMAIN + '.jit.su/';
//}

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, I know nodejitsu.');
  res.end();
//}).listen(port);
}).listen(8000,"127.0.0.1");
*/



console.log('The http server has started at: ' + url);
