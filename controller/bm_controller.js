/**********************************************************************************************************************
 *  Purpose         : Handles and validates rquest coming from client and forward it to service layer for further logical
 *                    analysis.
 *
 *  @description
 *
 *  @file           : mapController.js
 *  @overview       : MapController class delegates the request from client to appropriate api's.
 *  @author         : Vimlesh Kumar 
 *  @version        : 1.0
 *  @since          : 09-23-2023
 *
 **********************************************************************************************************************/
/**
*@description loads all the depencies requied for the user controller class including express validator
*/
const { validationResult } = require('express-validator');

const Response = require('../services/Response');
const Service = require('../services/bm_service');

module.exports.calculateBm = async (req, res) => {
    try {
    } catch (error) {
        // Handle any unexpected errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}