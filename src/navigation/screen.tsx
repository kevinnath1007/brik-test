import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../modules/product/productList/ProductList';
// import {ScreenNavigationParams} from '../utils/globalType';

//region Root Stack
//
// This should be used if there are authentication stack
//
export type RootStackParams = {
    ProductList: undefined;
    ProductDetail: undefined;
};

const Screen = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => (
        <Screen.Navigator
            initialRouteName="ProductList"
            screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom'
        }}>
            <Screen.Screen name="ProductList" component={ProductList} />
            <Screen.Screen name="ProductDetail" component={ProductList} />
        </Screen.Navigator>
    );
//endregion
