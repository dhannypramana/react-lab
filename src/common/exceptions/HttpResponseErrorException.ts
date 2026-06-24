export class HttpResponseErrorException extends Error {
    type!: ErrorType;

    constructor({ message, type = 'RESPONSE_ERROR' }: ErrorValues) {
        super(message);
        this.type = type;
    };
}
