import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';
import {CoreClientResponse} from '../libraries/network/instance/core/responseInterceptor';

export type ResponseCoreAPI<T, V> = CoreClientResponse<T extends V ? V : T>;

export type ScreenNavigationParams<P extends ParamListBase> = NavigatorScreenParams<P>;
