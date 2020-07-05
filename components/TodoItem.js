import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function TodoItem(props) {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }
    return (
        <TouchableOpacity
            onPress={deleteHandler}
            style={styles.itemContainer}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginVertical: 15,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white',
        // borderRadius: 10,
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: {width: 0, height: 2},
    }
})