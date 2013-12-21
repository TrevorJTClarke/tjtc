var express  = require('express'),
    config   = require('config'),
    redis    = require("redis"),
	app      = express(),
	server   = require('http').createServer(app);

var redisStore = redis.createClient(config.redis.PORT, config.redis.SERVER); 
    redisStore.auth(config.redis.SECRET, function() {
        console.log("REDIS connected!");
    });

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
    redisStore.get("commitmsg", function (err, data) {
        res.render('index', {
            commit: data + ""
        });
    });
});
app.get('/active', function(req, res){
    res.json({ active: true });
});

app.post('/git/commit/hook', function(req, res){
    //intercept git hooks
    console.log(req.body);

    // redisStore.set("commitmsg", "Setting up a githook to listen for all my commits.");
    res.end();
});

//start server
server.listen(process.env.VCAP_APP_PORT || 9000, function(){
    console.log('TJTC SITE STARTED');
    console.log('http://localhost:9000');
});

