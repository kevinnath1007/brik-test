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
    code: CoreApiResponseCode;
    data: CoreApiResponseData<R>;
    message: CoreApiResponseMessage;
    config: CoreApiResponseConfig;
}

function getCoreApiResponseOk(
    httpCode: CoreApiResponseHttpStatusCode,
): CoreApiResponseOk {
    return (
        httpCode >= 200 &&
        httpCode < 300
    );
}

function getCoreApiResponseData<R>(
    httpCode: CoreApiResponseHttpStatusCode,
    data: CoreApiResponseData<R>
): CoreApiResponseData<R> | null {
    return getCoreApiResponseOk(httpCode) && data !== undefined ? data : null;
}

function getCoreApiMessage(message: CoreApiResponseMessage): CoreApiResponseMessage {
    return message !== undefined ? message : null;
}

export default function responseInterceptor<R>(
    response: ClientResponse<CoreClientResponse<R>>
): CoreClientResponse<R> {
    const {data: responseData, status: httpCode, statusText} = response;

    return {
        code: httpCode.toString(),
        ok: getCoreApiResponseOk(httpCode),
        data: getCoreApiResponseData(httpCode, responseData as CoreApiResponseData<R>),
        message: getCoreApiMessage(statusText),
        config: response.config as CoreApiResponseConfig
    };
}
