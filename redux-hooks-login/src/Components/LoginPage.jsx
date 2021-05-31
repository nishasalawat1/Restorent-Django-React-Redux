import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../Actions/user.actions';

export function LoginPage() {
    const [inputs,setInputs] = useState(
        {
        username:"",
        password:"",
        });
    const [submitted,setSubmitted] = useState(false);
    const {username, password} = inputs;
    const loggedIn = useSelector(state=>state.authentication.loggedIn);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(()=>{
        dispatch(userActions.logout());
    },[])

    function handleChanged(e){
        const {name,value} = e.target;
        setInputs(inputs=>({...inputs,[name]:value}));
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubmitted(true); 
        if(username&&password){
            const {from} = location.state || { from:{pathname:"/"} }
            dispatch(userActions.login(username,password,from))
        }
    }

    return (
        <div>
            <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleChanged} className={
                'form-control'+(submitted&& !username?' is-invalid':'')} />
            {submitted&& !username && <div className="invalid-feedback" >Username is required!</div>}
            </div>
            
            <div className="form-group">
            <label>Password</label>
            <input type="text" name="password" value={password} onChange={handleChanged} className={
                'form-control'+(submitted&& !password?' is-invalid':'')} />
            {submitted&& !password && <div className="invalid-feedback" >Password is required!</div>}
            </div>
            
            <div className="form-group">
            <button className="btn btn-primary">
                {loggedIn&& <span className="spinner-border spinner-border-sm mr-1"></span>}
                Login
            </button>
            <Link to="/register" className="btn btn-link">Register</Link>
            </div>

            </form>
            </div>
            
        </div>
    );
}

