import { userConstants } from "../Constant/user.constants";
import { userServices } from "../Services/user.service";
import { history } from "../helper/history";
import { alertActions } from "./alert.actions";

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
};

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));
        userServices.login(username, password).then(
            user => {
                dispatch(success(user));
                history.push(from);
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    };
    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user }
    }

    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }

    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error }
    }

}

function logout() {
    userServices.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userServices.register(user).then(
            user => {
                dispatch(success(user));
                history.push('/login');
                dispatch(alertActions.success("Registraion Successfull!"))
            }
            ,
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user }
    }

    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user }
    }

    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error }
    }
}

function getAll(){
    return dispatch => {
        dispatch(request());
        userServices.getAll().then(
            users=>dispatch(success(users)),
            error=> dispatch(failure(error.toString()))
        )
    }
    function request() {
        return { type: userConstants.GETALL_REQUEST }
    }
    function success(users) {
        return { type: userConstants.GETALL_SUCCESS, users }
    }
    function failure(error) {
        return { type: userConstants.GETALL_FAILURE, error }
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id){
    return dispatch => {
        dispatch(request(id));
        userServices.delete(id).then(
            users=>dispatch(success(id)),
            error=> dispatch(failure(error.toString()))
        )
    }
    function request(id) {
        return { type: userConstants.DELETE_REQUEST, id }
    }
    function success(id) {
        return { type: userConstants.DELETE_SUCCESS, id }
    }
    function failure(error,id) {
        return { type: userConstants.DELETE_FAILURE, id ,error }
    }
}
