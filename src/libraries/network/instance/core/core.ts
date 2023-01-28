import {API_CORE} from '../../../env/config';
import axios, {
    ClientResponse,
    ClientError,
    // ClientRequestConfig
} from '../httpClientType';
import responseInterceptor from './responseInterceptor';
import errorInterceptor from './errorInterceptor';

const options = {
    baseURL: API_CORE,
    timeout: 30000,
    validateStatus: null
};

export const defaultHeaders = {
    agent: true,
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
};

const core = axios.create(options);

core.defaults.headers.common = defaultHeaders;

// For authorization refresh token mechanism system
// core.interceptors.request.use(
//     (request: ClientRequestConfig): any => requestInterceptor(request),
//     (error: ClientError): any => errorRequestInterceptor(error)
// );

core.interceptors.response.use(
    (response: ClientResponse): any => responseInterceptor(response),
    (error: ClientError): any => errorInterceptor(error)
);

export default core;
