const http = require('http');
const express = require('express');
const appRoutes = require('./src/routes/index');
const appMiddleware = require('./src/middleware/app-middleware');
const logEvent = require('./src/event/myEmitter');
const loggingListener = require('./src/event/logging.listener');
const {APP_ERROR}= require('./src/constant/error-event.constant')

loggingListener();
const app = express();
app.use(appMiddleware);
app.use(appRoutes);
const server = http.createServer(app);
server.on('error', function(e) {
    logEvent.emit(APP_ERROR, {
        logTitle: 'APP FAILED',
        logMessage: e
    });
});
module.exports = server;