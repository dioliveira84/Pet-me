'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const utils = require('./helpers/utils');
const initMongo = require('./helpers/connectMongo');
const configEnv = require('./helpers/readConfig');
const hbs = require('hbs');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

require('dotenv')
.config({
    path: path.resolve(process.cwd(),'./src/environment/.env')
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: false
}));

// config body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());

//config hbs
//app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

//config session
app.use(session({ secret: 'blah', name: 'id' }))
app.use(passport.initialize());
app.use(passport.session());


// -- INICIO --
//Mapeia rotas automatico dentro da pasta routes

let fileRoutes = utils.readRecursiveDirectory('routes').filter(item => {
    return item !== '';
});

fileRoutes.forEach(file => {
    let rf = require('./' + file.replace('.js', ''));
    let fn = file
        .replace('routes', '')
        .split('\\')
        .join('/')
        .replace('.js', '');
    app.use(fn, rf);

    console.log('Route ' + fn + ' --> ok!');
});


app.get('/api', (req, res, next) => {
    res.status(200).json({
        title: 'Pet-me',
        version: '0.0.1',
        path: '/api/v1'
    });
});

app.get('/', (req, res,) => {
    res.json({
        title: 'Pet-me'
    })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handlers
  
  // development error handler
  // will print stacktrace
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
  


configEnv.readEnvFile();

initMongo.init('models/v1');



module.exports = app;