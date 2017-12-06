var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');

var token = require('./app/token');

var waterline = require('waterline');
var modelClass = require('./models/model');
var config = require('./config');

var app = express();

let orm = new waterline();
orm.loadCollection(modelClass);

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login/loginaction', (req,res,next) => {
	console.log("====="+req.body.account);
	let params={userName:req.body.account,passwd:req.body.passwd};
	app.models.user.find(params)
						.exec((err,characters) => {
							if(err) return next(err);
							console.log('length---'+characters.length);
							if(characters.length==1){
								//生成token的逻辑还要变
								var tokenObj={userid:characters[0].userId,passwd:characters[0].passwd};
								res.send({token:token.createToken(tokenObj,100),account:req.body.account});
							}
							else{
								res.status(404).send();
							}
							
						});
	
})

app.post('/api/getloginstatus',(req,res,next) =>{
	if(token.checkToken(req.body.token)){
		res.send({status:'success'});
	}
	else{
		res.send({status:'fail'});
	}
})

app.use('/login.html',function(req, res) {
	console.log('111');
    res.sendFile(path.join(__dirname, './views', 'login.html'));
});
//
app.use('/',function(req, res) {
	console.log('---index');
    res.sendFile(path.join(__dirname, './views', 'home.html'));
});
//定义错误处理中间件，统一捕捉所有的异常
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

var server = require('http').createServer(app);


orm.initialize(config, (err,models) => {
	if(err) throw err;
	app.models = models.collections;
	//app.set('models',models.collections);
	app.connections = models.connections;

	server.listen(app.get('port'),() => {
		console.log('Express server listening on port ' + app.get('port'));
	});
});