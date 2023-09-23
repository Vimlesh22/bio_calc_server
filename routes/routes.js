/***************************************************************************************
 *  Purpose         : Maintains and delgates all the routes
 *
 *  @description
 *
 *  @file           : routes.js
 *  @overview       : .
 *  @author         : Vimlesh Kumar
 *  @version        : 1.0
 *  @since          : 09-23-2023
 *
 *****************************************************************************************/

/**
* @description Dependencies require to be installed before the execution of this file.
*/
const express = require('express');
const app = express();
const router = express.Router();
const bm_controller = require("../controller/bm_controller");


/**
* @description delegates request coming to calulate function
*/
router.post('/calculate', bm_controller.calculateBm);


module.exports = router;