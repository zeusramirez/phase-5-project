// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory, Redirect} from 'react-router-dom'

import Main from './components/Main'; 
import Login from './components/Login';
import Garage from './components/Garage';
import NaviBar from './components/NaviBar'
import VehicleView from './components/VehicleView';




function App() {
    let history = useHistory()
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [followFeed, setFollowFeed] = useState([])
    const [fetchFollows, setFetchFollows] = useState(false)

  async function logOut() {
    const res = await fetch("/logout", {
      method: "DELETE"
    })
    if (res.ok) {
      setUser(null)
      history.push("/")
    }
  }

  useEffect(() => {
    if (user != null){
        async function getFollows(){
            const res = await fetch('/getfollows')
            const followArr = await res.json()
            setFollowFeed(followArr)
        }
        getFollows()
    }
  }, [fetchFollows])

  async function postUserInfo(updatedInfo) {
    const res = await fetch (`users/${user.id}`,{
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(updatedInfo) 
        })
        const data = await res.json()
        if (res.ok) {
          setUser(data)
          console.log(data)
        } else {
          setErrors(data.errors)
        }
  }

  return (
    <div className="App">
      <NaviBar user={user} logOut={logOut}/>

      <Switch>
        <Route exact path = "/">
          <Main user={user} followFeed={followFeed} fetchFollows={fetchFollows} setFetchFollows={setFetchFollows}/>
        </Route>
        <Route exact path = "/vehicle/:id">
          <VehicleView user={user} followFeed={followFeed} fetchFollows={fetchFollows} setFetchFollows={setFetchFollows}/>
        </Route>
        <Route exact path = "/mygarage">
          {user ? <Garage user={user}  errors={errors} postUserInfo={postUserInfo}/> : <Redirect to="/" />}
        </Route>
        <Route exact path = "/login">
          <Login setUser={setUser} fetchFollows={fetchFollows} setFetchFollows={setFetchFollows}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
