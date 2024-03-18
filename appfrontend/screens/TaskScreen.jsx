import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { tasks } from '../constants/tasks';
import {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';

const TaskScreen = () => {
  const suggestions = [
    {
      id: '0',
      todo: 'Add file',
    },
    {
      id: '1',
      todo: 'Schedule meet',
    },
    {
      id: '2',
      todo: 'Contact mentor',
    },
    {
      id: '3',
      todo: 'Update Profile',
    },
    {
      id: '4',
      todo: 'Complete project',
    },
    {
      id: '5',
      todo: 'Submit assignment',
    },
  ];

  const [todo, setTodo] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [taskList, setTaskList] = useState(tasks);

  const handleCheckCirclePress = (taskId) => {
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleSendIconPress = () => {
    if (todo.trim() !== '') {
      const newTask = {
        id: Math.random().toString(),
        todo: todo.trim(),
      };
      setTaskList(prevTasks => [...prevTasks, newTask]);
      setTodo('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text style={{ marginLeft: 15, marginTop: 20, color: 'black', fontSize: 20 }}>
          My Tasks
        </Text>
      </View>
      <ScrollView style={{  }} horizontal={false}>
        {taskList.map(task => (
          <View key={task.id} style={{ flexDirection: 'row', justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={{ color: 'black', fontSize: 15 }}>{task.todo}</Text>
            <Pressable onPress={() => handleCheckCirclePress(task.id)}>
              <Antdesign name="checkcircleo" size={20} style={{ color: 'black', marginLeft: 10 }} />
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: 150,
          alignItems: 'flex-end',
        }}>
        <Pressable
          onPress={() => setIsVisible(!isVisible)}
          style={{
            borderRadius: 50,
            marginBottom: 30,
            marginRight: 25,
          }}>
          <Antdesign
            name="pluscircle"
            size={50}
            style={{ position:'absolute' ,bottom:5,right:3,color: 'black' }}></Antdesign>
        </Pressable>
      </View>

      <BottomModal
        onBackdropPress={() => setIsVisible(!isVisible)}
        onHardwareBackPress={() => setIsVisible(!isVisible)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        modalTitle={
          <ModalTitle
            title="Add Task"
            style={{ backgroundColor: 'white', color: 'white' }}
          />
        }
        modalAnimation={
          new SlideAnimation({
            slidefrom: 'bottom',
          })
        }
        visible={isVisible}
        onTouchOutside={() => setIsVisible(!isVisible)}>
        <ModalContent
          style={{ width: '100%', height: 290, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              value={todo}
              onChangeText={text => setTodo(text)}
              placeholder="Enter a task here"
              style={{
                backgroundColor: 'purple',
                color: 'white',
                fontSize: 17,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 25,
                padding: 10,
                marginTop: 15,
                width: '90%',
              }}></TextInput>
            <Ionicons
              name="send-outline"
              size={30}
              color="purple"
              style={{ position: 'absolute', right: 1, top: 25 }}
              onPress={handleSendIconPress}
            />
          </View>

          <Text style={{ marginTop: 15, color: 'black' }}>Some suggestions</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
              marginVertical: 10,
            }}>
            {suggestions?.map((item, index) => (
              <TouchableOpacity
                onPress={() => setTodo(item?.todo)}
                style={{
                  backgroundColor: 'purple',
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 25,
                }}
                key={index}>
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  {item?.todo}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  )
}

export default TaskScreen;