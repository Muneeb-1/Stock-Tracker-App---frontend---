import { LOGIN_SUCCESS, LOGIN_USER } from "../constants/constant";
import { ADD_USER_REQUEST, GET_DEPARTMENT_REQUEST, GET_ROLE_REQUEST, GET_TASK_REQUEST, USER_LIST } from "../constants/userConstant";
///         LOGIN ACTION       ///
////////////////////////////////////////////////////////////////////////////////////
export const loginRequest = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

///////////////////////////////////////////////////////////////////////////////////


// User List
////////////////////////////////////////////////////////////////////////////////////
export const getUserList = (data) => ({
  
      type:USER_LIST,
      payload: data
  
});
/////////////////////////////////////////////////////////////////////////////////////


///       ADD USER      ///
////////////////////////////////////////////////////////////////////////////////////
export const addUserRequest = (credentials) => ({
  type: ADD_USER_REQUEST,
  payload: credentials,
});

///////////////////////////////////////////////////////////////////////////////////


// GET Role
////////////////////////////////////////////////////////////////////////////////////
export const getUserRole = (data) => ({
      type:GET_ROLE_REQUEST,
      payload:data
  
});

/////////////////////////////////////////////////////////////////////////////////////

// GET TASK
////////////////////////////////////////////////////////////////////////////////////
export function getUserTask(){
  return{
      type:GET_TASK_REQUEST
  }
}

///////////////////////////////////////////////////////////////////////////////////