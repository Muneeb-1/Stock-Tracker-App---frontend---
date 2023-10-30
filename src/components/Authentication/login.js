import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import Input from "../TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../services/action/action";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Login({ navigation }) {
  const [isLoading,setLoading]=useState(false)
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.loginReducer);
  
  setTimeout(() => {
    if (Object.keys(data).length != 0) {
      setLoading(false);
      }
   
  },995);

  const [fdata, setFdata] = useState({
    email: "",
    password: "",
  });

  const handleUser = () => {
    setLoading(true);
    dispatch(loginRequest(fdata));
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Text style={styles.loginText}>Login</Text>
      <Text>Sign in to continue.</Text>
      <Input
        title={"EMAIL"}
        placeHolder="Email"
        onChangeText={(text) => setFdata({ ...fdata, email: text })}
      />

      <Input
        title={"PASSWORD"}
        placeHolder="Password"
        secureTextEntry
        onChangeText={(text) => setFdata({ ...fdata, password: text })}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleUser}>
        
      {isLoading? <ActivityIndicator size="large" color="yellow" />:
        <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF", // Blue background color
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: wp("5%"), // 5% of the screen width
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#FF6C61", // Red background color
    borderRadius: 5,
    padding: wp("3%"), // 3% of the screen width
    alignItems: "center",
    marginTop: hp("2%"), // 2% of the screen height
    width: wp("65%"), // 65% of the screen width
  },
  buttonText: {
    color: "white",
    fontSize: wp("4%"), // 4% of the screen width
    fontWeight: "bold",
  },
});
