import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import VehicleLogCard from './VehicleLogCard'

import AddLog from './AddLog.js'

export default function VehicleView(props) {
    const {user} = props
    const [carData, setCarData] = useState([])
    const [showLogForm, setShowLogForm]= useState(false)
    const id = useParams().id
    let owner = false
    let followed = false
    console.log(carData)
    if (user !== null && user.id === carData.user_id){
        console.log("I am the owner!")
        owner = true
    }
    async function handleFollow(e) {
        e.preventDefault()
        const following = {
            user_id: user.user_id,
            vehicle_id: carData.id
        }
        const res = await fetch("/follow",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(following)
        })
        const data = await res.json()
        if (res.ok) {
            console.log("Following!", data)
            followed = true
        }else{
            console.log(data.errors)
        }
    }
console.log(showLogForm)
    useEffect(() => {
        async function getVehicleData() {
            const res = await fetch(`/vehicles/${id}`)
            const vehicleData = await res.json()
            setCarData(vehicleData)
            }
            getVehicleData()
            }, [showLogForm])
            console.log(carData.updates)
    return (
        <main role="main">
            {showLogForm ? <Modal show={true}><AddLog showLogForm={showLogForm} setShowLogForm={setShowLogForm} carData={carData}/></Modal>:null}
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{carData.name}</h1>
          <h4>{carData.year} {carData.make} {carData.model}</h4>
          <p className="lead text-muted">{carData.bio}</p>
          <p>
            {owner ? 
            (<button  onClick={()=> setShowLogForm(!showLogForm)} className="btn btn-primary my-2">Add log</button>)
            : <>{user ? 
                (<button onClick={handleFollow}  className="btn btn-primary my-2">
                {followed ? "Unfollow": "Follow"}</button>)
                :(<Link to="/login"><button className="btn btn-success">Sign In to Follow</button></Link>)}</>
                }
            {/* {owner ? <button  className="btn btn-secondary my-2">Edit Vehicle</button>: null} */}
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
              {carData.updates && carData.updates.length > 0 ? carData.updates.map(update => <VehicleLogCard key={update.id} {...update}/>):( <>{owner ? <h2> No Updates to show... Add one now!</h2>: <h2>No Updates to show... Check back later!</h2>}</>)}
          </div>
        </div>
      </div>
      </main>
    )
}
