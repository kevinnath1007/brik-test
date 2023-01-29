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

export default function errorRequestInterceptor(
    params: ClientError<ErrorParams>
): ErrorInterceptor {
    const {message, response} = params;

    if (__DEV__) {
        console.error('requer error : ', message, response?.data.error);
    }

    return {
        ok: false
    };
}
