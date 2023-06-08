import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { Ionicons } from '@expo/vector-icons';

const TodoFooter = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('Error', 'You need to enter a task', [{ text: 'OK' }]);
      setTodo('');
      return;
    }

    dispatch(addTask({ task: todo }));
    setTodo('');
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.addButton} onPress={onSubmitTask}>
            <Ionicons name="add" style={styles.addIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Add Task"
            onChangeText={setTodo}
            value={todo}
            onSubmitEditing={onSubmitTask}
            returnKeyType="done"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addIcon: {
    color: 'grey',
    fontSize: 20,
  },
});

export default TodoFooter;
