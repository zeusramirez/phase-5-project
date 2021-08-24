import React, {useState} from "react";
import { useHistory } from 'react-router-dom'

export default function Login({setUser}) {
    const [loginView, setLoginView] = useState(true)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    let history = useHistory()

    function toggleView() {
        setLoginView(!loginView)
        setName("")
        setUsername("")
        setPassword("")
    }

    async function handleLogin(e){
        e.preventDefault()  
        const credentials = {
            username,
            password
        }
        const res = await fetch("/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(credentials)
        })
        const data = await res.json()
        if (res.ok) {
            setUser(data)
          history.goBack()
        } else {
            console.log(data)
            setErrors(data.errors)
        }
        
    }

    async function handleSignup(e) {
      e.preventDefault()
      const userData = {
        name,
        username,
        password
      }
      const res = await fetch("/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data)
        history.goBack()
    } else {
        setErrors(data.errors)
    }
    }
  return (
      <>
      {errors !== [] ? (
      <div>
          {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))}
      </div>)
      : null} 
      {loginView ?
    (
        <div className="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Sign In</h2>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user"></span>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Username" required="required" value={username} onChange={e => setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
              </span>
            </div>
            <input type="password" className="form-control"  placeholder="Password" required="required" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <button onClick={handleLogin} type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </div>
      </form>
      <p className="text-center small">
        Don't have an account? <a  className="link" onClick={toggleView}>Sign up here</a>.
      </p>
    </div>
    ):(
    <div className="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Sign Up</h2>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user"></span>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Name" required="required" value={name} onChange={e => setName(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-wrench"></span>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Username" required="required" value={username} onChange={e => setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
              </span>
            </div>
            <input type="password" className="form-control"  placeholder="Create Password" required="required"value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <button onClick={handleSignup} type="submit" className="btn btn-primary btn-block">
           Create Account
          </button>
        </div>
      </form>
      <p className="text-center small">
        Alread have an account? <a className="link" onClick={toggleView}>Sign in here</a>.
      </p>
    </div>
  )}
  </>)
}
