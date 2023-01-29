/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Container} from '../../../components';
import Content from "./elements/Content";
import AddButton from "./elements/addButton";

function ProductList(): JSX.Element {
    const insets = useSafeAreaInsets();
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: 'white',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
    };

    return (
        <Container style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Content />
            <AddButton />
        </Container>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    contentContainerFlatlist: {
        paddingHorizontal: 8,
        backgroundColor: 'white'
    }
});

export default ProductList;
