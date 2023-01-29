import React from "react";
import {TouchableOpacity, Text, StyleSheet, Keyboard} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";

import {addProductList} from "../../dataSource/productListData";
import {RootState} from "../../../../libraries/StateManagement";
import {StackNavigationParams} from "../../../../utils/globalType";
import {RootStackParams} from "../../../../navigation/screen";

type productListNavigatorType = StackNavigationParams<RootStackParams, 'ProductAdd'>;

const SubmitButton = () => {
    const productAddState = useSelector((state: RootState) => state.productAdd);
    const {goBack} = useNavigation<productListNavigatorType>();
    const dispatch = useDispatch();

    const addProduct = () => {
        if (productAddState.data) {
            dispatch(addProductList({item: productAddState.data, callback: goBack}));
        }
    }
    return (
        <TouchableOpacity onPress={addProduct} style={styles.button}>
            <Text>Submit</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#FF0000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 30,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        marginVertical: 8,
        zIndex: 999
    },
})
export default SubmitButton;
