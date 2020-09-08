const logEvent = require('../event/myEmitter');
const {APP_ERROR} = require('../constant/error-event.constant')

const noRoute = (req, res) => {
    logEvent.emit(APP_ERROR, {
        logTitle: 'ROUTE-FAILED',
        logMessage: `${req.originalUrl} wrong requested`
    });
    res.status(404)
    res.json({message: 'Page not found'});
};

module.exports = noRoute;