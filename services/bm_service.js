/***************************************************************************************
 *  Purpose         : Maintains all the logical coding providing seperation of concerns.
 *
 *  @description
 *
 *  @file           : bm_service.js
 *  @overview       : .
 *  @author         : Vimlesh Kumar
 *  @version        : 1.0
 *  @since          : 09-22-2023
 *
 *****************************************************************************************/
/**
* @description Dependencies require to be installed before the execution of this file.
*/

const calculateBM = (inputData) => {
    try {
        const {
            yield,
            truck_capacity,
            purchase,
            sales
        } = inputData;

        // Calculate trip_per_acre using the formula (yield / truck_capacity)
        const trip_per_acre = yield / truck_capacity;

        // Calculate depreciation using the formula (purchase - sales)
        const depreciation = purchase - sales;

        // Create an array of objects to hold the calculated values
        const calculatedValues = [
            {
                "trip_per_acre": trip_per_acre,
                "depreciation": depreciation
            }
        ];

        // Return the array of calculated values
        return calculatedValues;
    } catch (error) {
        console.error("Error calculating trip_per_acre and depreciation:", error);
        throw error;
    }
};

module.exports.calculateBmService = (inputData) => {
    return calculateBM(inputData);
};
