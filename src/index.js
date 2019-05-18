const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const configEnv = require('./helpers/readConfig');
const initMongo = require('./helpers/connectMongo');
const utils = require('./helpers/utils');
const flash = require('connect-flash');
const pet = require('./models/v1/pet');

// Passport Config
require('./config/passport')(passport);

require('dotenv').config({
  path: path.resolve(process.cwd(), './src/environment/.env'),
});

// eslint-disable-next-line dot-notation
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: false,
  }),
);


// config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// config hbs
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));
hbs.registerPartials(`${__dirname}/views/partials`);

// config session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
// -- INICIO --
// Mapeia rotas automatico dentro da pasta routes

const fileRoutes = utils.readRecursiveDirectory('routes').filter(item => item !== '');

fileRoutes.forEach((file) => {
  const rf = require(`./${file.replace('.js', '')}`);
  const fn = file
    .replace('routes', '')
    .split('\\')
    .join('/')
    .replace('.js', '');
  app.use(fn, rf);

  console.log(`Route ${fn} --> ok!`);
});

app.get('/api', (req, res, next) => {
  res.status(200).json({
    title: 'Pet-me',
    version: '0.0.1',
    path: '/api/v1',
  });
});

app.get('/', async (req, res) => {
  const resultPet = await pet.find({})
  const user = req.user
 
  console.log(resultPet)
  res.render('home',{resultPet,user});
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.get('/', (req, res) => {
  res.json({
    title: 'Pet-me',
  });
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  console.log(err);
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {},
  });
});

configEnv.readEnvFile();

initMongo.init('models/v1');

module.exports = app;
