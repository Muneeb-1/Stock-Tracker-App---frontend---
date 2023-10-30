import { SET_USER_DATA } from "../constants/userConstant";


const initialState=[];


export const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
     case SET_USER_DATA:
                return [
                    action.data
                ]

             

        
            default: 
            return state
    }

}