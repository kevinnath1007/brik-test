import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../modules/product/productList/ProductList';
import ProductDetail from "../modules/product/productDetail/ProductDetail";
import {ProductType} from "../modules/product/model/productType";
import ProductAdd from "../modules/product/productAdd/ProductAdd";
// import {ScreenNavigationParams} from '../utils/globalType';

//region Root Stack
//
// This should be used if there are authentication stack
//
export type RootStackParams = {
    ProductList: undefined;
    ProductDetail: {item: ProductType};
    ProductAdd: undefined;
};

const Screen = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => (
        <Screen.Navigator
            initialRouteName="ProductList"
            screenOptions={{
                animation: 'fade_from_bottom'
        }}>
            <Screen.Screen name="ProductList" component={ProductList} options={{headerShown: false}}/>
            <Screen.Screen name="ProductDetail" component={ProductDetail} options={{title: 'Product Detail'}} />
            <Screen.Screen name="ProductAdd" component={ProductAdd} />
        </Screen.Navigator>
    );
//endregion
