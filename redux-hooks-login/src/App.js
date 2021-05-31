import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helper/history';
import { alertActions } from './Actions/alert.actions';
import { PrivateRoute } from './Components/PrivateRoute';
import { HomePage } from './Components/HomePage';
import { LoginPage } from './Components/LoginPage';
import { RegisterPage } from './Components/RegisterPage';
import logo from './logo.svg';
import './App.css';

function App() {
  const alert = useSelector(state=>state.alert);
  const dispatch = useDispatch()
  useEffect(()=>{
    history.listen((location,action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    })
  },[])

  return (
    <div className="App">
       <div className="jumbotron">
       <div className="container">
       <div className="col-md-8 offset-md-2">
         {alert.message && 
          <div className={`alert ${alert.type}`}>{alert.message}</div>
         }
         <Router history={history}>
           <Switch>
              <PrivateRoute exact path='/' component={HomePage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <Redirect from="*" to="/" />
           </Switch>
         </Router>
       </div>
       </div>
       </div>
    </div>
  );
}

export default App;
