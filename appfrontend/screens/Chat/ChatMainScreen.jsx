import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Image, Touchable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Button from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {useUser} from '../../context/allContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AddFriend from './AddFriend';

const Stack = createStackNavigator();

const ChatMainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatMain" component={ChatMainScreen} />
      <Stack.Screen name="AddFriend" component={AddFriend} />

    </Stack.Navigator>
  );
};

const ChatMainScreen = () => {
  const navigation = useNavigation();
  // const {name, email, college, selectedImage} = useUser();

  


  return (
    <View style={tw`h-full relative`}>
      {/* Header*/}

      <View style={tw`mt-5 ml-2 flex flex-row  mr-5`}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
        <View style={tw`flex flex-row w-80 justify-center`}>
        <Text style={tw`text-black text-center font-bold text-lg`}>Chats</Text>
        </View>

      </View>

      <View style={tw`mt-3`}></View>

      {/* Main chat screen Add friend */}

      {/* Box */}
      
      
      {/* Add Friend icon */}
      <View style= {tw`absolute bottom-10 right-7 bg-yellow-500 w-15 h-15 rounded-xl flex justify-center items-center`}>

      <TouchableOpacity onPress={() => navigation.navigate('AddFriend')}>
        <Feather
          name="user-plus"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default ChatMainStack;
