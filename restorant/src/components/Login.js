import React, { Component } from 'react';
import CustomNavbar from './Navbar';
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
    }

    login() {
        this.props.loginHandler(this.state).then((result) => {
            localStorage.setItem('token', result.token);
            this.props.history.push('list')
        }).catch((err) => {
            console.log(err)
            alert("Invalid username or password");  
        });
    }
    render() {
        return (
            <div>
                <CustomNavbar />
                <h2>Login Page</h2>
                <input
                    type="text"
                    name='username'
                    placeholder="Username"
                    onChange={(e) => this.setState({ username: e.target.value })}
                /><br /><br />
                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    onChange={(e) => this.setState({ password: e.target.value })}
                /><br /><br />
                <button onClick={() => this.login()}>Login</button>
            </div>
        );
    }
}

export default Login;