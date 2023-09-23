const { body } = require('express-validator');

// Validation rules for the 'calculate' route
const calculateValidationRules = [
    body('yield').isNumeric().withMessage('Yield must be a number').isFloat({ min: 0 }).withMessage('Yield must be a positive number'),
    body('truck_capacity').isNumeric().withMessage('Truck capacity must be a number').isFloat({ min: 0 }).withMessage('Truck capacity must be a positive number'),
    body('trip_length').isNumeric().withMessage('Trip length must be a number').isFloat({ min: 0 }).withMessage('Trip length must be a positive number'),
    body('fuel_economy').isNumeric().withMessage('Fuel economy must be a number').isFloat({ min: 0 }).withMessage('Fuel economy must be a positive number'),
    body('interest_rate').isNumeric().withMessage('Interest rate must be a number').isFloat({ min: 0 }).withMessage('Interest rate must be a positive number'),
    body('labor').isNumeric().withMessage('Labor must be a number').isFloat({ min: 0 }).withMessage('Labor must be a positive number'),
    body('fuel').isNumeric().withMessage('Fuel must be a number').isFloat({ min: 0 }).withMessage('Fuel must be a positive number'),
    body('repairs').isNumeric().withMessage('Repairs must be a number').isFloat({ min: 0 }).withMessage('Repairs must be a positive number'),
    body('load_time').isNumeric().withMessage('Load time must be a number').isFloat({ min: 0 }).withMessage('Load time must be a positive number'),
    body('unload_time').isNumeric().withMessage('Unload time must be a number').isFloat({ min: 0 }).withMessage('Unload time must be a positive number'),
    body('idling_time').isNumeric().withMessage('Idling time must be a number').isFloat({ min: 0 }).withMessage('Idling time must be a positive number'),
    body('idling_fuel_use').isNumeric().withMessage('Idling fuel use must be a number').isFloat({ min: 0 }).withMessage('Idling fuel use must be a positive number'),
    body('loaded_speed').isNumeric().withMessage('Loaded speed must be a number').isFloat({ min: 0 }).withMessage('Loaded speed must be a positive number'),
    body('unloaded_speed').isNumeric().withMessage('Unloaded speed must be a number').isFloat({ min: 0 }).withMessage('Unloaded speed must be a positive number'),
    body('purchase').isNumeric().withMessage('Purchase must be a number').isFloat({ min: 0 }).withMessage('Purchase must be a positive number'),
    body('sales').isNumeric().withMessage('Sales must be a number').isFloat({ min: 0 }).withMessage('Sales must be a positive number'),
    body('years_of_use').isNumeric().withMessage('Years of use must be a number').isFloat({ min: 0 }).withMessage('Years of use must be a positive number'),
    body('annual_hours_of_use').isNumeric().withMessage('Annual hours of use must be a number').isFloat({ min: 0 }).withMessage('Annual hours of use must be a positive number'),
  ];

module.exports = {
    calculateValidationRules,
};