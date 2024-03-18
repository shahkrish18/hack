import React from 'react'
import {View, Text} from 'react-native'
import AppNavigation from './navigation/AppNavigation';
import { UserProvider } from './context/allContext';
import {ModalPortal} from 'react-native-modals'
const App = () => {
  return (
    <UserProvider>
      <AppNavigation />
      <ModalPortal/>
    </UserProvider>
  )
}
export default App
