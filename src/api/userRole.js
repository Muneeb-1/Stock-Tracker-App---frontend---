import axios from "axios";
import {BaseUrl} from "../services/constants/baseUrl"
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

///fetch Departments
export const fetchDepartments = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/user/getDepartment`);
    return response.data.department;
  } catch (error) {
    throw error;
  }
};

//fetch Role
export const fetchUserRoles = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/user/getRole`);
    return response.data.role;
  } catch (error) {
    throw error;
  }
};

//Add Task
export const addUserTask = async (fdata) => {
 
  const headers={
    'Content-Type': 'application/json'
  }
  console.log(fdata)

try{
  const response= await axios.post(`${BaseUrl}/user/addTask`,fdata,{headers}) ; 
  return response.data.message
  }
  catch(response)
  {
    Alert.alert("Some thing went wrong.Please try again")
  }
};

//Fetch specific Task

/////////////////////////////////////////////////////////////////
export const fetchSpecificTasks = async (role_id) => {
  if (role_id) {
    try {
      const response = await axios.get(`${BaseUrl}/user/getSpecificTask/${role_id}`);
      const data=response.data;
      return data
      
    } catch (error) {
      console.error(error);
    }
  }
};
//////////////////////////////////////////////////////////////////////////////////