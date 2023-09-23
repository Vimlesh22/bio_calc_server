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
 * Calculates biomass transportation metrics based on input data.
 *
 * @param {Object} inputData - Input data containing various parameters.
 * @returns {Array} An array of objects containing calculated metrics.
 */
const calculateBiomassMetrics = (inputData) => {
    try {
        const {
            yield,
            truck_capacity,
            trip_length,
            fuel_economy,
            interest_rate,
            labor,
            fuel,
            repairs,
            load_time,
            unload_time,
            idling_time,
            idling_fuel_use,
            loaded_speed,
            unloaded_speed,
            purchase,
            sales,
            years_of_use,
            annual_hours_of_use,
        } = inputData;

        // Calculate trips per acre using the formula (yield / truck_capacity)
        const trips_per_acre = yield / truck_capacity;

        // Calculate trip duration
        const trip_duration =
            load_time +
            unload_time +
            idling_time +
            (trip_length / loaded_speed) +
            (trip_length / unloaded_speed);

        // Calculate interest per hour
        const interest_per_hour = (purchase * (interest_rate / 150 / 100))

        // Calculate depreciation
        const depreciation = purchase - sales;
        const per_year = depreciation / years_of_use;
        const per_hour = per_year / annual_hours_of_use;

        // Calculate cost per acre
        const cost_per_acre =
            trips_per_acre *
            ((labor + repairs + interest_per_hour + per_hour) * trip_duration +
                (trip_length / fuel_economy) * 2 * fuel +
                idling_time * idling_fuel_use * fuel);

        // Calculate cost per ton
        const cost_per_ton = cost_per_acre / yield;

        // Create an array of objects to hold the calculated values
        const calculatedValues = [
            {
                trips_per_acre,
                trip_duration,
                interest_per_hour,
                depreciation,
                per_year,
                per_hour,
                cost_per_acre,
                cost_per_ton,
            },
        ];

        // Return the array of calculated values
        return calculatedValues;
    } catch (error) {
        console.error("Error calculating biomass metrics:", error);
        throw error;
    }
};

module.exports.calculateBiomassMetricsService = (inputData) => {
    return calculateBiomassMetrics(inputData);
};