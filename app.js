var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var nunjucks = require('nunjucks');

// Set up routes
var routes = require('./routes/index');

var app = express();

// NODE_ENV
var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
if (env === 'development') {
    app.locals.ENV_DEVELOPMENT;
}

// Templating engine
app.set('view engine', 'njk');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Logger
// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// 404 catcher
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development Error Handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// Production error handler
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

module.exports = app;