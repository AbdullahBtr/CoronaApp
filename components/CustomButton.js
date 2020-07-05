import React from "react";
import Colors from '../constants/Color';
import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

export default function CustomButton(props) {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <ButtonComponent onPress={props.onClick}>
            <View style={[styles.button, props.style]}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </ButtonComponent>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 5,
        minWidth: 200,
        maxWidth: 300,
        // shadowColor: 'black',
        // shadowOpacity: 0.25,
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 10,
        elevation: 12
    },
    buttonText: {
        color: Colors.buttonTextColor,
        fontSize: 22,
        textAlign: 'center'
    },
})