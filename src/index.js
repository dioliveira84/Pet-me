'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./helpers/utils');

const app = express();




app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: false
}));
// app.use(getHostOrigin);



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

module.exports = app;