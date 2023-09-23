/******************************************************************************
 *  Execution       :   1. default node         cmd> node server.js
 *                      2. if nodemon installed cmd> nodemon server.js
 *
 *  Purpose         : Defines all the APIs required for the Calculator application.
 *
 *  @description
 *
 *  @file           : server.js
 *  @overview       : This server file creates a connection on port 9001 for the application to run on localhost.
 *                    It sets up middleware, routes, and error handling.
 *  @module.exports : server - Express application instance.
 *  @author         : Vimlesh Kumar
 *  @version        : 1.0
 *  @since          : 09-22-2023
 *
 ******************************************************************************/

/**
 * @description Dependencies required to be installed before the execution of this file.
 */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const config = require('./config.json');

/**
 * @description Constant variable is declared to define the PORT number for the connection.
 * @var {integer} PORT
 */
const PORT = config.port_number;

const app = express();

/**
 * @description Create an HTTP server instance to support socket.io or other features if needed.
 */
const server = require('http').Server(app);

/**
 * @description Middleware added to support cross-origin platform sharing (CORS).
 */
app.use(cors());

/**
 * @description Middleware added to parse the data coming from URL requests.
 */
app.use('/api', bodyParser.urlencoded({ extended: true }));
app.use('/api', bodyParser.json());

/**
 * @description Middleware added to log the result of operations on the console using the morgan module.
 */
app.use(morgan('dev'));

/**
 * @description Define API routes by using the 'routes' module.
 */
app.use('/api', routes);

// Development error handler - will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.status(404).json({
            message: err.message,
            success: false,
        });
    });
}

// Production error handler - no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.status(404).json({
        message: err.message,
        success: false,
    });
});

/**
 * @description Start the server and listen on the defined PORT.
 */
server.listen(config.port_number, () => {
    console.log(`Server started on port ${config.port_number.toString()}`);
});