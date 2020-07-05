import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function () {
    return (
        <View style={styles.screen}>
            <Text>Info</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
    },


    scrollView: {
        width: '80%'
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center'
    },

});
