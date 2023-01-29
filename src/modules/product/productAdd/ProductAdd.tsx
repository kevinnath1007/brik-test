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
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import {
    Container, Image
} from '../../../components';
import {RootStackParams} from '../../../navigation/screen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import SectionField from "./elements/SectionField";
import SubmitButton from "./elements/SubmitButton";

type ProductDetailProps = NativeStackScreenProps<RootStackParams, 'ProductAdd'>;

const ProductAdd: React.FC<ProductDetailProps> = ({navigation}) => {
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
                    {/*note:
                        this should be component that open appLibrary and upload the image,
                        After uploaded the URL gonna be send again with all remaining data to API
                    */}
                    <Image source={{uri: 'https://media.discordapp.net/attachments/238648160086523904/1069175417715564584/image.png'}} style={styles.imageProduct} />
                    <SectionField label="SKU: " type="sku" />
                    <SectionField label="name: " type="name" />
                    <SectionField label="category: " type="categoryName" />
                    <SectionField label="description: " type="description" textArea />
                    <SectionField label="Width: " type="width" />
                    <SectionField label="height: " type="height" />
                    <SectionField label="length: " type="length" />
                    <SectionField label="weight: " type="weight" />
                    <SectionField label="price: " type="price" />
                    <SubmitButton />
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

export default ProductAdd;
