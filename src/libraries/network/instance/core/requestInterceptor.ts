// import {ClientRequestConfig} from '../httpClientType';
// to fetch dataSource & type from authorization
// import {getPersistedUser, LoginResponse} from '@modules/auth';
// import dayjs from 'dayjs';

// const EXPIRED_MINUTES_THRESHOLD = 60; // 60 minutes
// export function isTokenExpiredThreshold(user: LoginResponse): boolean {
//     const currentUnix = dayjs(new Date());
//     if (user) {
//         const {access_token_expired: accessTokenExpired} = user;
//         const parsedTokenExpired = dayjs.unix(accessTokenExpired);
//         const minutes = parsedTokenExpired.diff(currentUnix, 'm');
//         return minutes < EXPIRED_MINUTES_THRESHOLD;
//     }
//     return false;
// }
//
// export const updateRefreshToken = async (user: LoginResponse) => {
// };
//
// const isUseAccessToken = (headers: any) => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//     return !!headers?.Authorization;
// };
//
// export default async function requestInterceptor(config: ClientRequestConfig) {
//     const user = await getPersistedUser();
//     const isTokenExpiredSoon = isTokenExpiredThreshold(user as LoginResponse);
//     if (
//         isTokenExpiredSoon &&
//         isUseAccessToken(config.headers)
//     ) {
//         const newConfig = await updateRefreshToken(user as LoginResponse);
//         const newAccessToken: string | undefined = newConfig?.access_token;
//         if (newAccessToken) {
//             config.headers = {
//                 ...config.headers,
//                 Authorization: `Bearer ${newAccessToken}`
//             };
//         }
//     }
//     return config;
// }
