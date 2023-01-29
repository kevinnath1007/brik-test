import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

interface ISectionField {
    label: string;
    value: string;
    textArea?: boolean;
}

const SectionField: React.FC<ISectionField> = ({value, label, textArea = false }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput value={value} editable={false} multiline={textArea} style={styles.textInput} />
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
