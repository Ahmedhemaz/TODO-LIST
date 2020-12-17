import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

interface Props {
    onAddGoal(enteredGoal: string): void;
    onCloseAddGoal(): void;
    visiable: boolean;
}

const GoalInput = (props: Props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visiable} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goals"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="ADD" />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={props.onCloseAddGoal} title="CANCLE" color="red" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;