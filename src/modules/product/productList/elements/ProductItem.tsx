import React from 'react';
// this import should be not necessary cause it already setup for app style themes as reusable components
// the reason still import cause for now I haven't generalized what theme that always reusable
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {ProductType} from "../../model/productType";
import Image from "../../../../components/Image/Image";
import {StackNavigationParams} from "../../../../utils/globalType";
import {RootStackParams} from "../../../../navigation/screen";

interface IProductItemProps {
    item: ProductType;
}

type productListNavigatorType = StackNavigationParams<RootStackParams, 'ProductList'>;

const ProductItem: React.FC<IProductItemProps> = ({item}) => {
    const {navigate} = useNavigation<productListNavigatorType>();

    const onPress = () => {
        navigate('ProductDetail', {
            item
        });
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.content}>
                    <Text style={{flex: 1}}>{item.name}</Text>
                    <Text style={{flex: 1}}>{item.price}</Text>
                    <Text numberOfLines={3} style={{flex:1, flexWrap: 'wrap'}}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 5,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        marginVertical: 5,
        flex: 1,
        alignItems: 'flex-start'
    },
    content: {
        width: 0,
        marginHorizontal: 16,
        flexWrap: 'wrap',
        flexGrow: 1,
        alignItems: 'flex-start'
    },
    image: {
        width: 95,
        height: 95
    }
})

export default React.memo(ProductItem);
