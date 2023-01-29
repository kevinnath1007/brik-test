import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Image} from "../../../../components";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationParams} from "../../../../utils/globalType";
import {RootStackParams} from "../../../../navigation/screen";

type productListNavigatorType = StackNavigationParams<RootStackParams, 'ProductList'>;

const AddButton: React.FC = () => {
    const {navigate} = useNavigation<productListNavigatorType>();

    const onPress = () => {
        navigate('ProductAdd');
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={require('../../../../../assets/icons/plus.png')} style={styles.imagePlus} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: '#BEBEBE',
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imagePlus: {
        width: 65,
        height: 65
    }
});
export default AddButton;
