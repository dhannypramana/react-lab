export type ErrorType = 'RESPONSE_ERROR';
export type ErrorValues = {
    message: string;
    type?: ErrorType;
};
export type ErrorResponse = {
    code: string;
    message: string;
};
