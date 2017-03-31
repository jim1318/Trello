var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//ADDED THESE
var stylus = require("stylus");
var nib = require("nib");

var index = require('./routes/index');

//CREATE EXPRESS APP
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/save', index);

// Needed to make mixin code work.  Set hte basedir option
app.locals.basedir = path.join(__dirname, 'views');

//Add Stylus Middlewhere.  Must be before app.use(express.static...)
app.use(stylus.middleware({
  src: path.join(__dirname, "public"),    //Source directory used to find .styl files
  compile: function(str, p) {             //Custom Compile function
    return stylus(str).set("filename", p).use(nib());
  }
}));

//Moved this from above. Need to be after stylus middleware
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
