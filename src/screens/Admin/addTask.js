import { View, Text, StyleSheet, FlatList,KeyboardAvoidingView,TextInput,TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {BaseUrl} from "../../services/constants/baseUrl"
import { addUserTask } from "../../api/userRole";

const AddTask = ({navigation}) => {
  const [fdata,setFdata]=useState({
    name:"",
    description:""
  })
  const handleRole= async()=>{
     addUserTask(fdata) .then(task => {
      if (task) {
        // Show an alert with an "OK" button
        Alert.alert(
          'Alert',
          task,
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate("Assign Task");
              },
            },
          ]
        );
      }
     
    })
    .catch(error => {
      console.error('Error fetching roles: ', error);
    });
  }
 return (
    <KeyboardAvoidingView behavior="height"  style={styles.container}>
     <Text style={styles.heading}>Add Task</Text>
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
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );

}

export default AddTask

const styles = StyleSheet.create({ container: {
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
}})