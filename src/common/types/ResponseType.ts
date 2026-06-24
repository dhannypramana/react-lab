export type ResponseStatus = ObjectValues<typeof RESPONSE>;
export type GenericResponse<T> = {
    message: ResponseStatus;
    result: T;
};
export type GenericPagination<T> = {
    elements: string;
    message: string;
    pages: string;
    result: T;
};
