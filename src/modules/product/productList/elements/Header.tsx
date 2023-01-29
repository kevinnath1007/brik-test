import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {Container, Image} from '../../../../components';
import {debounce} from '../../../../utils/function';
import {searchProductList} from '../../model/productReducer';

const Header: React.FC = () => {
    const [text, onChangeText] = React.useState('');
    const dispatch = useDispatch();

    const onSubmitEditing = debounce(() => {
        dispatch(searchProductList(text));
    }, 250);

    const clear = () => {
      onChangeText('');
      dispatch(searchProductList(''));
    };

    return (
        <Container style={styles.container}>
            <Text style={styles.text}>
                Welcome to
                {'\n'}
                toko Klontong
            </Text>
            <View style={styles.textInputContainer}>
                <TextInput placeholder="Search by name" value={text} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing} style={styles.textInput} />
                <TouchableOpacity onPress={clear}>
                    <Image source={text !== '' ? require('../../../../../assets/icons/clear.png') : require('../../../../../assets/icons/search.png')} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: 'white',

        paddingBottom: 20,
        paddingTop: 96,
        paddingHorizontal: 32,
        marginHorizontal: -32
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16
    },
    textInputContainer: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 30,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        flex: 1
    },
    searchIcon: {
        width: 15,
        height: 15
    }
})
export default React.memo(Header);
