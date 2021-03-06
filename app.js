'use strict'

const express = require('express'),
path = require('path'),
cookieParser = require('cookie-parser'),
logger = require('morgan'),
es6Renderer = require('express-es6-template-engine');

const indexRouter = require('./routes/index');
// const reviewerRouter = require('./routes/reviewer');


const app = express();
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/reviewer', reviewerRouter);

module.exports = app;
