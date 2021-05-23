import { LOGIN, LOGIN_API_BEGIN, LOGIN_API_SUCCESS, LOGIN_API_FAILURE } from "../Constant";

// import {
//     FETCH_PRODUCTS_BEGIN,
//     FETCH_PRODUCTS_SUCCESS,
//     FETCH_PRODUCTS_FAILURE
//   } from '../Action/action';
  
  const initialState = {
    loginData: null,
    loading: false,
    error: null
  };

// export default function loginProcess(state=[],action){
//     switch(action.type){
//         case LOGIN:
//             console.log("Reducer",action.data)
//             return [
//                 ...state,
//                 {loginData:action.data}
//             ]
//             break;
//         default:
//             return state
//     }
// }

export default function loginProcess(state = initialState, action) {
    debugger
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
