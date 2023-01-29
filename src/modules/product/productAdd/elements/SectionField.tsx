import {Keyboard, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {setProductAdd} from "../../model/productReducer";
import {ProductType} from "../../model/productType";

interface ISectionField {
    label: string;
    type: keyof ProductType;
    textArea?: boolean;
}

const SectionField: React.FC<ISectionField> = ({type, label, textArea = false }) => {
    const [value, setValue] = React.useState<string>('');
    const dispatch = useDispatch();

    //note: validation field haven't finish yet (there are unpredictable situation that i need to finish first)
    React.useEffect(() => {
        const dismissKeyboard = Keyboard.addListener('keyboardDidHide', onSubmitEditing);

        return () => {
            dismissKeyboard.remove();
        }
    }, []);

    const onSubmitEditing = () => {
        dispatch(setProductAdd({field: type, value}));
    }

    const keyboardType = () => {
        switch (type) {
            case "height":
                return "number-pad";
                break;
            case "weight":
                return "number-pad";
                break;
            case "width":
                return "number-pad";
                break;
            case "length":
                return "number-pad";
                break;
            case "price":
                return "number-pad";
                break;
            default:
                return "default";
                break;
        }
    }

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput keyboardType={keyboardType()} placeholder={type} value={value} onBlur={onSubmitEditing} onChangeText={setValue} onSubmitEditing={onSubmitEditing} multiline={textArea} style={styles.textInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        alignItems: "flex-start"
    },
    label: {
        marginVertical: 8,
        marginHorizontal: 10,
        fontSize: 25
    },
    textInput: {
        width: '100%',
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
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 25,
        marginVertical: 8
    },
})

export default SectionField;
