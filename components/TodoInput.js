import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function TodoInput(props) {
    const [currentInput, setCurrentInput] = useState('');

    const inputChangeHandler = enteredText => {
        setCurrentInput(enteredText);
    };

    const addHandler = () => {
        props.onAdd(currentInput);
        setCurrentInput('');
    };

    return (
        <View>
            <Text style={styles.title}>Meine ToDo App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input} placeholder="Input ToDo" onChangeText={inputChangeHandler} value={currentInput}
                />
                <Button
                    title="ADD" onPress={addHandler}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 140
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
        marginBottom: 30
    }
});