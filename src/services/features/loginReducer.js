import { LOGIN_SUCCESS } from "../constants/constant";


const initialState = {
  
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
        }
        
  
      default:
        return state;
    }
  };