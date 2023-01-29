/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet, TextInput,
    useColorScheme,
    View,
    Text
} from 'react-native';

import {
    Colors,
    Header,
} from 'react-native/Libraries/NewAppScreen';
import {
    Container, Image
} from '../../../components';
import {RootStackParams} from '../../../navigation/screen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import SectionField from "./elements/SectionField";

type ProductDetailProps = NativeStackScreenProps<RootStackParams, 'ProductDetail'>;

const ProductDetail: React.FC<ProductDetailProps> = ({route}) => {
    const { item } = route.params;
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Container style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                scrollEnabled={true}
            >
                <View
                    style={styles.scrollViewContainer}>
                    <Image source={{uri: item.image}} style={styles.imageProduct} />
                    <SectionField label="SKU: " value={item.sku} />
                    <SectionField label="name: " value={item.name} />
                    <SectionField label="category: " value={item.categoryName} />
                    <SectionField label="description: " value={item.description} textArea />
                    <SectionField label="Width: " value={item.width.toString()} />
                    <SectionField label="height: " value={item.height.toString()} />
                    <SectionField label="length: " value={item.length.toString()} />
                    <SectionField label="weight: " value={item.weight.toString()} />
                    <SectionField label="price: " value={item.price.toString()} />
                </View>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    scrollViewContainer: {
        marginVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    imageProduct: {
        width: 205,
        height: 205,
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 32
    }
});

export default ProductDetail;
