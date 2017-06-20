var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession=require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signin = require('./routes/signin');
var mainpage = require('./routes/mainpage');
var shotel = require('./routes/shotel');
var vrindavan = require('./routes/vrindavan');
var biryani = require('./routes/biryani');
var vegk = require('./routes/vegk');
var frr = require('./routes/frr');
var logout = require('./routes/logout');
var aboutus = require('./routes/aboutus');
var mongo=require('mongodb');
//var mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test');
//var db=mongoose.connection;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret:'ss',saveUninitialized:true, resave:false}));

app.use('/', mainpage);
app.use('/users', users);
app.use('/login',login);
app.use('/signin',signin);
app.use('/mainpage',mainpage);
app.use('/shotel',shotel);
app.use('/vrindavan',vrindavan);
app.use('/biryani',biryani);
app.use('/vegk',vegk);
app.use('/frr',frr);
app.use('/logout',logout);
app.use('/aboutus',aboutus);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
// error handler
