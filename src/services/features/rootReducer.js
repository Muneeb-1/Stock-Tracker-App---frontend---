import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer"
import {reducer} from "./reducer"
import {addUserReducer} from "./addUserReducer"
import {getRoleReducer} from "./roleReducer"
import {getTaskReducer} from './taskReducer'





export default combineReducers({
    loginReducer,
    reducer,
    addUserReducer,
    getRoleReducer,
    getTaskReducer
})