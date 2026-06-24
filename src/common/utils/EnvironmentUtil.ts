export const env = object({
    VITE_APP_MODE: zEnum(['development', 'staging', 'production']),
    VITE_APP_PORT: string().transform(val => Number(val)),
}).parse(import.meta.env);
