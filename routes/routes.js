/***************************************************************************************
 *  Purpose         : Defines and delegates routes to corresponding controller functions.
 *
 *  @description
 *
 *  @file           : routes.js
 *  @overview       : Routes module for the application. Defines API endpoints and delegates
 *                    requests to the appropriate controller functions.
 *  @module.exports : router - Express Router object with defined routes.
 *  @author         : Vimlesh Kumar
 *  @version        : 1.0
 *  @since          : 09-23-2023
 *
 *****************************************************************************************/

/**
 * Dependencies required for this module.
 */
const express = require('express');
const router = express.Router();
const bm_controller = require("../controller/bm_controller");

/**
 * Delegates incoming POST requests to the 'calculateBm' controller function.
 *
 * @route POST /calculate
 * @function
 * @param {Request} req - Express Request object
 * @param {Response} res - Express Response object
 * @throws {Error} Any unexpected errors are caught and handled with a generic error message.
 */
router.post('/calculate', bm_controller.calculateBm);

/**
 * Module exports an Express Router object with defined routes.
 */
module.exports = router;
