import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory, Redirect} from 'react-router-dom'

import Account from './components/Account';
import Main from './components/Main'; 
import Login from './components/Login';
import Garage from './components/Garage';
import NaviBar from './components/NaviBar'




function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NaviBar/>

      <Switch>
        <Route exact path = "/">
          <Main/>
        </Route>
        <Route exact path = "/account">
          <Account/>
        </Route>
        <Route exact path = "/mygarage">
          <Garage/>
        </Route>
        <Route exact path = "/login">
          <Login setUser={setUser}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
