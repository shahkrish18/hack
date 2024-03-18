import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import ipconstant from '../ipconstant/ipconstant';
import axios from 'axios';
import { useUser } from '../context/allContext';

const FriendReq = () => {
  const navigation = useNavigation();
  const [peoples, setPeoples] = useState([]);
  const {userId} = useUser();


  useEffect(() => {
    persons();
  },[])

  const persons = async () => {
    try {
    console.log('Body:',userId);
      const response = await axios.get(`${ipconstant}/api/get-friend-requests/${userId}`);
      setPeoples(response.data);
      console.log('User request:', users.data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <Text style={tw`text-black text-center font-bold text-lg`}>
            Friend Request
          </Text>
        </View>
      </View>
      <View style={tw`mt-3`}></View>
      {/* Main chat screen Add friend */}
      {/* Box */}
      {
      peoples.map((people)=>
      (
        <View
          style={tw`mt-2 min-h-20 border-b border-gray-300 flex flex-row justify-between rounded-bl-lg rounded-br-lg bg-transparent shadow-md p-3`}>
          {/* Icon */}
          <View style={tw`h-20 flex flex-col justify-center`}>
            <Image
              style={tw`w-13 h-13 rounded-full`}
              source={require('../assets/images/Projectmanagement/user3.png')}
            />
          </View>
          {/* Name Email */}
          <View style={tw`mt-3`}>
            <Text style={tw`text-black font-bold text-base`}>{people.name}</Text>
            <Text style={tw`text-gray-500 text-sm`}>{people.email}</Text>
          </View>
          {/*  Add Friend Btn   */}
          <View style={tw`flex flex-col justify-center`}>
            <TouchableOpacity
              style={tw`h-12 w-24 bg-yellow-400 shadow-lg  rounded-lg flex items-center justify-center`}>
              <Text style={tw`text-white font-bold text-sm`}>
                Accept Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
      )
    }
    </View>
  );
};

export default FriendReq;
