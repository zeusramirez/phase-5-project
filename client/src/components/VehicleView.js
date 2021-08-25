import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import VehicleLogCard from './VehicleLogCard'

import AddLog from './AddLog.js'

export default function VehicleView(props) {
    const {user, setFetchFollows, fetchFollows, followFeed} = props
    const [carData, setCarData] = useState([])
    const [showLogForm, setShowLogForm]= useState(false)
    let history = useHistory()
    const id = useParams().id
    let owner = false
    let followed = false
    let imageCard = ""
    if (user !== null && user.id === carData.user_id){
        owner = true
    }
    if (user != null && followFeed.length > 0){
        followFeed.map(follow => 
            {
                if (follow.id === carData.id){
                    followed = true
                    console.log("ITS HERE", followed)
                }}
                )}
                
                async function handleDel(e){
                    e.preventDefault()
                    const res = await fetch(`/vehicles/${id}`, {
                        method: "DELETE"
                    })
                    if (res.ok) {
                        history.goBack()
                    }
                }
                async function handleFollow(e) {
                    let text = e.target.innerText
                    e.preventDefault()
                    if (text === "Follow"){
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
                setFetchFollows(!fetchFollows)
                
            }else{
                console.log(data.response)
            }
        }else if (text === "Unfollow"){
            const res = await fetch("/unfollow",{
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({vehicle_id: carData.id})
            })
            if (res.ok) {
                console.log("Unfollowed!")
                setFetchFollows(!fetchFollows)
                
            }else{
                console.log(res)
            }
            
        }
    }
    useEffect(() => {
        async function getVehicleData() {
            const res = await fetch(`/vehicles/${id}`)
            const vehicleData = await res.json()
            setCarData(vehicleData)
        }
        getVehicleData()
    }, [showLogForm])
    if (carData.images === undefined) {
    }else if (carData.images.length > 0){
        imageCard = carData.images[0].url
    }
    console.log(carData)
    return (
        <main role="main">
            {showLogForm ? <Modal show={true}><AddLog showLogForm={showLogForm} setShowLogForm={setShowLogForm} carData={carData}/></Modal>:null}
      <section className="jumbotron text-center">
        <div className="container">
        <img className="view-image" src={imageCard}/>
          <h1 className="jumbotron-heading">{carData.name}</h1>
          <h4>{carData.year} {carData.make} {carData.model}</h4>
          <p className="lead text-muted">{carData.bio}</p>
          <p>
            {owner ? 
            (<button  onClick={()=> setShowLogForm(true)} className="btn btn-primary my-2">Add log</button>)
            : <>{user ? 
                (<button onClick={handleFollow}  className="btn btn-primary my-2">
                {followed ? "Unfollow": "Follow"}</button>)
                :(<Link to="/login"><button className="btn btn-success">Sign In to Follow</button></Link>)}</>
                }
            {owner ? <button onClick={handleDel} className="btn btn-secondary my-4">Remove Vehicle</button>: null}
          </p>
        </div>
      </section>
            <br/>
            <br/>
            <br/>
      <div className="album py-5">
        <div className="container">

          <div className="row">
              {carData.updates && carData.updates.length > 0 ? carData.updates.map(update => <VehicleLogCard key={update.id} images={carData.log_images}{...update}/>):( <>{owner ? <h2> No Updates to show... Add one now!</h2>: <h2>No Updates to show... Check back later!</h2>}</>)}
          </div>
        </div>
      </div>
      </main>
    )
}
