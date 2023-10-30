import { View, Text,StyleSheet,Alert,ActivityIndicator } from 'react-native'
import React from 'react'
import Login from '../../components/Authentication/login'
import {useSelector} from "react-redux"

export default function LoginScreen({navigation}) {
  const data=useSelector((state)=>state.loginReducer);
  
  setTimeout(() => {
    if (Object.keys(data).length != 0) {
      if(data.user.message=="Login Successfully")
      {
        navigation.navigate("TabNavigation")
      }
      if(data.user.message=="Invalid email or password")
      {
        Alert.alert(data.user.message)
      }
     
    }
   
  }, 1000);
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})