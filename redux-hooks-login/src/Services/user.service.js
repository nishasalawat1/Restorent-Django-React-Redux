import { userConstants  } from "../Constant/user.constants";
import {authHeader} from "../helper/auth-header"

let API_URL = "http://localhost:8000";

export const userServices = {
    login,
    logout,
    register,
    getAll,
    getById,
    delete:_delete,
    update,
}

function login(username,password){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password})
    };
    return fetch(API_URL+'/token-auth/',requestOptions).then(handelResponse).then(
        res=>{
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.user))
            localStorage.setItem('token', JSON.stringify(res.token))
            return res.user
        }
        )
} 

function logout(){
    // remove user from local storage to log user out
    localStorage.clear()
}

function getAll(){
    const requestOptions = {
        method:'GET',
        headers:authHeader,
    };
    return fetch(`${API_URL}/api/user`,requestOptions).then(handelResponse);
}
function register(user){
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(user),
    }
    return fetch(`${API_URL}/api/user/`,requestOptions).then(handelResponse);
}
function update(user){
    const requestOptions = {
        method:'PUT',
        headers: {...authHeader(),'Content-Type':'application/json'},
        body:JSON.stringify(user),
    }
    return fetch(`${API_URL}/api/user/${user.id}/`,requestOptions).then(handelResponse);
}
function getById(id){
    const requestOptions = {
        method:'GET',
        headers: authHeader(),
    }
    return fetch(`${API_URL}/api/user/${id}/`,requestOptions).then(handelResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id){
    const requestOptions = {
        method:'DELETE',
        headers: authHeader(),
    }
    return fetch(`${API_URL}/api/user/${id}/`,requestOptions).then(handelResponse);
}


function handelResponse(response){
    return response.text().then(text=>{
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401){
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error)
        }
        return data;
    }
    )
}