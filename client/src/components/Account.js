import React, {useState} from "react";

export default function Account(props) {
    const {user, postUserInfo, errors, setShowAccForm, showAccForm}= props
    const [name, setName] = useState(user.name)
    const [userName, setUserName] = useState(user.username)
    function handleSubmit(e) {
        e.preventDefault()
        let updatedInfo = {
            username: userName,
            name
        }
        postUserInfo(updatedInfo)
        setShowAccForm(false)
    }


  return (
    <div className="container">
      <div className="row gutters">
      {errors !== [] ? (
      <div>
          {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))}
      </div>)
      : null}
          <div className="account-card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Account Overview</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label >Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value = {name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label >Username</label>
                    <input
                      type="username"
                      className="form-control"
                      value = {userName}
                      onChange={e => setUserName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() =>  setShowAccForm(!showAccForm)}
                      name="submit"
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      name="submit"
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
