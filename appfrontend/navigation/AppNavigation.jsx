import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProjectScreen from '../screens/Projects/ProjectsScreen';
import ChatMainScreen from '../screens/Chat/ChatMainScreen';
import FriendReq from '../screens/FriendReq';
import Chatbot from '../screens/Chatbot';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProjectList" component={ProjectScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ChatMain" component={ChatMainScreen} />
        <Stack.Screen name="FriendReq" component={FriendReq} />
        <Stack.Screen name="Chatbot" component={Chatbot} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
