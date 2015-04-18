var express = require('express'),
    logger = require('morgan'),
    cookieParser=require('cookie-parser'),
    bodyParser=require('body-parser'),
    passport = require('passport');

module.exports = function(app, config) {



    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/public'));

}