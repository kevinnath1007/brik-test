import {InternalAxiosRequestConfig} from 'axios';

import {Monitoring} from '../../../monitoring/monitoring';
import {ClientError} from '../httpClientType';

interface ErrorInterceptor {
    ok: boolean;
}

interface ErrorParams {
    message: string;
    code: string;
    latency: string;
    error: string;
}

export default function errorInterceptor(params: ClientError<ErrorParams>): ErrorInterceptor {
    const {message, response, config} = params;

    if (__DEV__) {
        console.error(message, response?.data.error);
    }

    if (message !== 'Network Error') {
        const {url, data, headers, method} = config as InternalAxiosRequestConfig;
        const jsonData = JSON.parse(data);
        if (jsonData?.password) {
            jsonData.password = 'XXXXXXXX';
        }
        if (headers?.Authorization && headers.Authorization !== 'Bearer undefined') {
            headers.Authorization = 'Bearer XXXXXXXX';
        }

        Monitoring.logError('API Call failed', {
            url,
            headers,
            method,
            data: jsonData
        });
    }

    return {
        ok: false
    };
}
