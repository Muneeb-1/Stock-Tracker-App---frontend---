// rootSaga.js
import { all } from 'redux-saga/effects';
import {SegaData, addUser, getRole, getTask, watchLogin} from './saga'


export default function* rootSaga() {
  yield all([
  watchLogin(),
  SegaData(),
  addUser(),
  getRole(),
  getTask(),

]);
}