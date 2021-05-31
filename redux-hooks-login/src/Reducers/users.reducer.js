import { userConstants } from "../Constant/user.constants";

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return { loading: true };
        case userConstants.GETALL_SUCCESS:
            return { items: action.users };
        case userConstants.GETALL_FAILURE:
            return { error: action.error };
        case userConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(user =>
                    user.id === action.id ? { ...user, deleting: true } : user
                )
            }
        case userConstants.DELETE_SUCCESS:
            // remove deleted user from state
            return { items: state.items.filter(user => user.id !== action.id) }
        case userConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        // make copy of the user object without 'deleting:true' property.
                        const { deleting, ...userCopy } = user;
                        // add 'deletingError:action.error' property in user object and return it. 
                        return { ...userCopy, deletingError: action.error };
                    } else {
                        return user;
                    }
                })
            }
        default:
            return state;
    }
}
