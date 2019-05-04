'use strict';

const app = require('./src/index');
const http = require('http');
const https = require('https');
const fs = require('fs');

/**
 * @function
 * @param {any} val - numero da porta
 * @description Função responsavel por normalizar numero da porta do servidor
 * @returns {boolean|number}
 */
let normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

/**
 * @function
 * @param {object} error
 */
let onError = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;

        default:
            console.error(error);
            throw error;
    }
};

/**
 * @function
 * @description servidor está no ar
 */
let onListening = () => {
    const addr = server.address();
    const bind =
        typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || '3008');

app.set('port', port);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const httpsOptions = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// }
// const server = https.createServer(httpsOptions, app)
const server = http.createServer(app);
// server.timeout = 900000;
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * @function
 * @param {any} obj - numero da porta
 * @description erro ao inicar servidor
 */
let onException = obj => {
    if (obj instanceof Error) {
        console.log(`Caught exception: ${obj}`);
        console.log(
            `Name: ${obj.name}\nMessage: ${obj.message}\nStack: ${obj.stack}`
        );
    }
    if (obj instanceof Number) {
        console.log(`About to exit with code: ${obj}`);
    }
};

process.on('uncaughtException', onException);

process.on('exit', onException);

process.on('warning', onException);

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});

module.exports = {
    normalizePort: normalizePort,
    onException: onException
}