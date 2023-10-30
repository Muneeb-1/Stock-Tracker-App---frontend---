import {GET_ALL_USER, LOGIN_USER, SAVE_USER} from '../constants/constant';
import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {loginSuccess, saveAllUser} from '../action/action';
import {useNavigation} from '@react-navigation/native';
import {BaseUrl} from '../constants/baseUrl';
import {
  ADD_USER_REQUEST,
  DEPARTMENT_GET_SUCCESS,
  GET_DEPARTMENT_REQUEST,
  GET_ROLE_REQUEST,
  GET_TASK_REQUEST,
  ROLE_GET_SUCCESS,
  SET_USER_DATA,
  TASK_GET_SUCCESS,
  USER_ADD_SUCCESS,
  USER_LIST,
} from '../constants/userConstant';
import {Alert} from 'react-native';

///          LOGIN USER          ///
//////////////////////////////////////////////////////////////////////////////////////////////////
export function* watchLogin() {
  yield takeEvery(LOGIN_USER, loginSaga);
}

function* loginSaga(action) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const data = action.payload;
  const Data = JSON.stringify(data);

  try {
    const response = yield axios.post(`${BaseUrl}/user/loginUser`, Data, {
      headers,
    });
    const data2 = response.data;
    yield put(loginSuccess(data2));
  } catch (error) {
    Alert.alert('Login Fail');
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Get user using saga
/////////////////////////////////////////////////////////////////////////
export function* SegaData() {
  yield takeEvery(USER_LIST, userList);
}

function* userList(action) {
  const roleName = action.payload;
  
  console.log(roleName)
  try {
    let data = yield axios.get(`${BaseUrl}/user/getAllUser/${roleName}`);
    data = data.data.users;
    yield put({type: SET_USER_DATA, data});
  } catch (error) {
    alert(error);
  }
}
////////////////////////////////////////////////////////////////////////

///     ADD USER     ///
//////////////////////////////////////////////////////////////////////////////////////////////////
export function* addUser() {
  yield takeEvery(ADD_USER_REQUEST, userAddSaga);
}

function* userAddSaga(action) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const data = action.payload;

  const Data = JSON.stringify(data);

  try {
    const response = yield axios.post(`${BaseUrl}/user/registerUser`, Data, {
      headers,
    });
    const result = response.data.message;
    alert(result);
  } catch (error) {}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

///         GET ROLE                ///
/////////////////////////////////////////////////////////////////////////
export function* getRole() {
  yield takeEvery(GET_ROLE_REQUEST, userRole);
}

function* userRole(action) {
  const roleName = action.payload;
  
  console.log(roleName)
  try {
    let data = yield axios.get(`${BaseUrl}/user/getRole/${roleName}`);
    data = data.data.role;
    yield put({type: ROLE_GET_SUCCESS, data});
  } catch (error) {}
}
////////////////////////////////////////////////////////////////////////

///         GET ROLE                ///
/////////////////////////////////////////////////////////////////////////
export function* getTask() {
  yield takeEvery(GET_TASK_REQUEST, userTask);
}

function* userTask() {
  try {
    let data = yield axios.get(`${BaseUrl}/user/getAllTask`);
    data = data.data.task;
    yield put({type: TASK_GET_SUCCESS, data});
  } catch (error) {
    Alert.alert('Fail To Get Task');
  }
}
////////////////////////////////////////////////////////////////////////
