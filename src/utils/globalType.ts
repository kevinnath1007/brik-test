import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';
import {CoreClientResponse} from '../libraries/network/instance/core/responseInterceptor';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type ResponseCoreAPI<T, V> = CoreClientResponse<T extends V ? V : T>;

export type ScreenNavigationParams<P extends ParamListBase> = NavigatorScreenParams<P>;

export type StackNavigationParams<
    P extends ParamListBase,
    RouteName extends keyof P = string
    > = NativeStackNavigationProp<P, RouteName>;
