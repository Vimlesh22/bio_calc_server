/**
 * @design by Vimlesh Kumar
 */

/**
 * Represents a standardized response object for API responses.
 */
class Response {
    /**
     * Creates a new Response object.
     * @param {boolean} error - Indicates if the response represents an error (true) or success (false).
     * @param {string} message - A descriptive message providing information about the response.
     * @param {object} data - The data associated with the response (e.g., results or payload).
     */
    constructor(error, message, data) {
        this.error = error;
        this.message = message;
        this.response = data;
    }
}

module.exports = Response;