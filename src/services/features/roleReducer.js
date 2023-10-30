// reducer.js

import { ROLE_GET_SUCCESS } from "../constants/userConstant";

const initialState = []

export const getRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLE_GET_SUCCESS:
      return [
        action.data
    ]
    
      

    default:
      return state;
  }
};


