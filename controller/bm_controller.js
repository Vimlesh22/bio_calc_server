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

const Response = require('../services/Response');
const Service = require('../services/bm_service');

/**
 * Calculate biomass metrics based on client input.
 * @param {Request} req - Express Request object
 * @param {Response} res - Express Response object
 */
module.exports.calculateBm = async (req, res) => {
    try {
        const inputData = req.body;
        const results = Service.calculateBiomassMetricsService(inputData);

        if (results && results.length > 0) {
            // Success response with HTTP status 200 OK
            const response = new Response(false, "Calculation done successfully", results);
            res.status(200).json(response);
        } else {
            // Error response with HTTP status 400 Bad Request
            const response = new Response(true, "Error while calculation", []);
            res.status(400).json(response);
        }
    } catch (error) {
        // Handle unexpected errors with a generic error message
        console.error("Error in calculateBm:", error);
        res.status(500).json(new Response(true, "Internal Server Error", []));
    }
};