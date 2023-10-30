import { View, Text, StyleSheet, FlatList,KeyboardAvoidingView,TextInput,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {BaseUrl} from "../../services/constants/baseUrl"

export default function AddRole() {
  const [fdata,setFdata]=useState({
    name:"",
    description:""
  })
  const handleRole= async()=>{
    const headers={
      'Content-Type': 'application/json'
    }
 
try{
    const response= await axios.post(`${BaseUrl}/user/addRole`,fdata,{headers}) ; 
    alert(response.data.message)
    }
    catch(error)
    {
      console.log(error)
    }
  }
 return (
    <KeyboardAvoidingView behavior="height"  style={styles.container}>
     <Text style={styles.heading}>Add Role</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setFdata({ ...fdata, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(text) => setFdata({ ...fdata, description: text })}
        multiline
      />
     
      <TouchableOpacity style={styles.button} onPress={handleRole}>
        <Text style={styles.buttonText}>Add User</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    color:"black",
    textTransform:"capitalize"
  },
  dropdown: {
    width: "80%",
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

