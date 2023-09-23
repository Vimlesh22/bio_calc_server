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

const Response = require('../services/Response');
const Service = require('../services/bm_service');

module.exports.calculateBm = async (req, res) => {
    try {

        const inputData = req.body;
        const results = Service.calculateBmService(inputData);

        if (results && results.length > 0) {
            let response = new Response(false, "Calculation done successfully", results);
            res.status(200).send(response);
        } else {
            let response = new Response(true, "Error while calculation", []);
            res.status(400).send(response);
        }
    } catch (error) {
        // Handle any unexpected errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}