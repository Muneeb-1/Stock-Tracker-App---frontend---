import { USER_ADD_SUCCESS } from "../constants/userConstant";

const initialState=[];


export const addUserReducer=(state=initialState,action)=>{
    switch(action.type)
    {
     case USER_ADD_SUCCESS:
                return [
                    action.data
                ]

             

        
            default: 
            return state
    }

}