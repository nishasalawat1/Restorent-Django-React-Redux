import { LOGIN, LOGIN_API_BEGIN, LOGIN_API_SUCCESS, LOGIN_API_FAILURE } from "../Constant";


export const LoginApIBegin = () => ({
    type: LOGIN_API_BEGIN
});

export const LoginApISuccess = login_response => ({
    type: LOGIN_API_SUCCESS,
    payload: login_response 
});

export const LoginApIFailure = error => ({
    type: LOGIN_API_FAILURE,
    payload: error 
});

export const login = (login_form_data) => {
    return dispatch => {
        dispatch(LoginApIBegin());
        return fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login_form_data)
        }).then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(LoginApISuccess(json));
                return json
            })
            .catch(error => dispatch(LoginApIFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}



