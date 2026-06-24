import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export type ExtendedAxiosRequestConfig<D = any> = {
    _asAxiosResponse?: boolean;
    _authorization?: 'camel' | 'snake' | false;
    _notification?: boolean;
    _handler?: boolean;
    _retry?: boolean;
    _tokenTarget?: 'OAuth' | 'FMC' | 'FIFGO';
} & AxiosRequestConfig<D>;

export type ExtendedInternalAxiosRequestConfig<D = any> = {
    _asAxiosResponse?: boolean;
    _authorization?: 'camel' | 'snake' | false;
    _notification?: boolean;
    _handler?: boolean;
    _retry?: boolean;
    _tokenTarget?: 'OAuth' | 'FMC' | 'FIFGO';
} & InternalAxiosRequestConfig<D>;

export type AxiosErrorResponse = AxiosResponse<ErrorResponse>;
