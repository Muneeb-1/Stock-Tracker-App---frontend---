import { TASK_GET_SUCCESS } from "../constants/userConstant";

const initialState = []

export const getTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_GET_SUCCESS:
      return [
        action.data
    ]
    
      

    default:
      return state;
  }
};