var express  = require('express'),
    config   = require('./config'),
	app      = express(),
	server   = require('http').createServer(app);

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon(__dirname + '/favicon.ico'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: config.COOKIE_SECRET }));
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
    res.render('index');
});

//start server
server.listen(process.env.VCAP_APP_PORT || 9000, function(){
    console.log('TJTC SITE STARTED');
    console.log('http://localhost:9000');
    console.log(' ');
});

