import {ClientResponse} from '../httpClientType';
import {AxiosRequestConfig} from 'axios';

export type CoreApiResponseOk = boolean;
export type CoreApiResponseHttpStatusCode = number;
export type CoreApiResponseMessage = undefined | null | string;
export type CoreApiResponseCode = string;
export type CoreApiResponseData<R = any> = undefined | R | null;
export type CoreApiResponseError = null | Array<[]> | string;

export interface CoreApiResponseConfig extends AxiosRequestConfig {
    retry: number;
}

export interface CoreClientResponse<R> {
    ok: CoreApiResponseOk;
    httpCode: CoreApiResponseHttpStatusCode;
    code: CoreApiResponseCode;
    data: CoreApiResponseData<R>;
    message: CoreApiResponseMessage;
    config: CoreApiResponseConfig;
}

function getCoreApiResponseOk(
    httpCode: CoreApiResponseHttpStatusCode,
    code: CoreApiResponseCode
): CoreApiResponseOk {
    return (
        httpCode >= 200 &&
        httpCode < 300 &&
        ((code >= '200000' && code < '300000') || code === 'STATUS_OK' || code === 'STATUS_CREATED')
    );
}

function getCoreApiResponseData<R>(
    httpCode: CoreApiResponseHttpStatusCode,
    code: CoreApiResponseCode,
    data: CoreApiResponseData<R>
): CoreApiResponseData<R> | null {
    return getCoreApiResponseOk(httpCode, code) && data !== undefined ? data : null;
}

function getCoreApiMessage(message: CoreApiResponseMessage): CoreApiResponseMessage {
    return message !== undefined ? message : null;
}

export default function responseInterceptor<R>(
    response: ClientResponse<CoreClientResponse<R>>
): CoreClientResponse<R> {
    const {data: responseData, status: httpCode} = response;
    const {data, code, message} = responseData;

    return {
        code,
        httpCode,
        ok: getCoreApiResponseOk(httpCode, code),
        data: getCoreApiResponseData(httpCode, code, data),
        message: getCoreApiMessage(message),
        config: response.config as CoreApiResponseConfig
    };
}
