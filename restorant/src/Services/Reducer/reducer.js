import { LOGIN, LOGIN_API_BEGIN, LOGIN_API_SUCCESS, LOGIN_API_FAILURE, Types } from "../Constant";
  
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

  const restoInitialState = {
    restoList: null,
    loading: false,
    error: null
  };

  export function restorentReducer(state = restoInitialState, action) {
    switch(action.type) {
      case Types.RESTORENT_API_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case Types.ADD_RESTORENT:
        return {
          ...state,
          loading: false,
          restoCreatedStatus: action.payload,
        };

        case Types.UPDATE_RESTORENT:
          return{
            ...state,
            loading:false,
            restoUpdatedStatus: action.payload,
          }

        case Types.GET_RESTORENT_LIST:
          return {
            ...state,
            loading: false,
            restoList: action.payload,
          };
  
      case Types.RESTORENT_API_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }

