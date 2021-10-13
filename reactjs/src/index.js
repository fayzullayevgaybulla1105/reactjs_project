import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import  Navbar from './components/Navbar';
import  NavbNotFound from './components/ErrorPage';
import ErrorPage from './components/ErrorPage';
import App from './component/App';
import 'bootstrap/dist/css/bootstrap.min.css'







ReactDOM.render(
        <div>
                  <App/>
              <BrowserRouter>
              <Navbar/>
              <Switch>
                 <Route exact path='/sign-in' component={SignIn} />
                 <Route exact path='/sign-up' component={SignUp} />
                 <Route component={NavbNotFound}/>
              </Switch>
        </BrowserRouter>
        </div>
, document.getElementById('root'));