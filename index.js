const dotenv = require('dotenv');
const server = require('./server');
const connection = require('./dbConn');
const logEvent = require('./src/event/myEmitter');
const {APP_ERROR, APP_INFO} = require('./src/constant/error-event.constant')

dotenv.config();
if (process.env.APP_NAME) {
    connection.authenticate().then(() => {
        server.listen(process.env.APP_PORT, '0.0.0.0', function () {
            if (server.listening) {
                logEvent.emit(APP_INFO, {
                    logTitle: 'SERVER',
                    logMessage: `Server is listening on ${process.env.APP_PORT}`
                });
            }
        });
    }).catch((err) => {
        logEvent.emit(APP_ERROR, {
            logTitle: 'DB_FAILED',
            logMessage: err
        });
    });
} else {
    process.exit(1);
}