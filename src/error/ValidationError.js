class ValidationError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = 'EMAIL_MISSING_OR_INVALID_PARAMS';
    }
}

module.exports = ValidationError;