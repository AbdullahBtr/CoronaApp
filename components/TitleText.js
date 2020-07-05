import React from "react";
import {StyleSheet, Text} from "react-native";

export default function DefaultText(props) {

    return (
        <Text style={[styles.text, props.style]}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30
    }
})