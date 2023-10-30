import { NavigationContainer } from '@react-navigation/native'
import AppRoute from './src/navigations/Stack/appRoute'
import { View, Text } from 'react-native'
import React from 'react'
import {Provider} from "react-redux"
import store from './src/services/store/store'

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <AppRoute/>
    </NavigationContainer>
    </Provider>
    
  )
}