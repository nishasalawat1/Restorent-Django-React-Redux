import { ApIBegin, ApIFailure, ApISuccess } from "../Action/actionCreators";
import { LOGIN_API_BEGIN, LOGIN_API_SUCCESS, LOGIN_API_FAILURE, Types } from "../Constant";

export const login = (login_form_data) => {
    return dispatch => {
        dispatch(ApIBegin(LOGIN_API_BEGIN));
        return fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login_form_data)
        }).then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(ApISuccess(LOGIN_API_SUCCESS, json));
                return json
            })
            .catch(error => dispatch(ApIFailure(LOGIN_API_FAILURE, error)));
    };
}

export const createResto = (form_data) => {
    return dispatch => {
        dispatch(ApIBegin(Types.RESTORENT_API_LOADING));
        return fetch('http://localhost:8000/api/resto/', {
            method: 'Post',
            body: JSON.stringify(form_data),
            headers: { 'Content-Type': 'application/json' }
        }).then(handleErrors).then(
            (response) => response.json().then(
                    (result) => {
                        dispatch(ApISuccess(Types.ADD_RESTORENT,result))
                        return result
                    }).catch(error => dispatch(ApIFailure(Types.RESTORENT_API_ERROR,error)))
            )
    };
}

export const restoListAction = (data) => {
    return dispatch => {
        dispatch(ApIBegin(Types.RESTORENT_API_LOADING));
        return fetch('http://localhost:8000/api/resto/').then(handleErrors).
        then((response) => response.json().then((result) => {
                dispatch(ApISuccess(Types.GET_RESTORENT_LIST,result))
                return result
            }).catch(
                error => dispatch(ApIFailure(Types.RESTORENT_API_ERROR,console,error))
            )
        )
    }
}

export const restoUpdateAction = (form_data) => {
    return dispatch => {
        dispatch(ApIBegin(Types.RESTORENT_API_LOADING));
        return fetch('http://localhost:8000/api/resto/'+form_data.id+'/', {
            method: 'Put',
            body: JSON.stringify(form_data),
            headers: { 'Content-Type': 'application/json' }
        }).then(
            response => response.json().then(
            (result) => {
                dispatch(ApISuccess(Types.UPDATE_RESTORENT,result))
                return result
            }).catch(
                error => dispatch(ApIFailure(Types.RESTORENT_API_ERROR,error))
            )
        )
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}



