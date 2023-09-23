/******************************************************************************
 *  Execution       :   1. default node         cmd> node server.js
 *                      2. if nodemon installed cmd> nodemon server.js
 *
 *  Purpose         : Defines all the apis required for Calculator application.
 *
 *  @description
 *
 *  @file           : server.js
 *  @overview       : server file creates a connection on port 9001 for the application to run on localhost.
 *  @author         : Vimlesh Kumar
 *  @version        : 1.0
 *  @since          : 09-22-2023
 *
 ******************************************************************************/

/**
 * @description Dependencies require to be installed before the execution of this file.
 * @var {Class} express class instance of the express
 * @var {Class} morgan class instance of the morgan
 * @var {Class} cors class instance of the cors
 * @var {Class} bodyParser class instance of the body-parser
 */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const config = require('./config.json');

/**
 * @description Constant Variable is declared to use to define PORT number for the connection.
 * @var {integer} PORT
 */
const PORT = config.port_number;

const app = express();

let server = null;


console.log("running in *developer only* http mode.");
server = require('http').Server(app);


/**
 * @description middleware added to support cross origin platform sharing.
 */
app.use(cors());

/**
 * @description middleware added to parse the data coming from url request.
 */
app.use('/api',bodyParser.urlencoded({extended : true}));
app.use('/api',bodyParser.json());
/**
 * @description middleware added to log result of the operation on the console using morgan module.
 */
app.use(morgan('dev'));
app.use('/api',routes);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
      res.status(404).json({
        message: err.message,
        success : false
      })
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);

          res.status(404).json({
            message: err.message,
            success : false
          })
});

server.listen(config.port_number, () => {
  console.log(`Server started on port ${config.port_number.toString()}`);
});