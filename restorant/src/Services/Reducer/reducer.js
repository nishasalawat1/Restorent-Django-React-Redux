import { LOGIN, LOGIN_API_BEGIN, LOGIN_API_SUCCESS, LOGIN_API_FAILURE } from "../Constant";
  
  const initialState = {
    loginData: null,
    loading: false,
    error: null
  };

export default function loginProcess(state = initialState, action) {
    switch(action.type) {
      case LOGIN_API_BEGIN:
        return {
          ...state,
          loading: true,
        };
  
      case LOGIN_API_SUCCESS:
        return {
          ...state,
          loading: false,
          loginData: action.payload
        };
  
      case LOGIN_API_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
