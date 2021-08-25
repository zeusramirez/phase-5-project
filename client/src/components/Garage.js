import React, {useEffect, useState} from 'react'
import "./FeedCard.scss";
import FeedCard from './FeedCard'
import Modal from 'react-bootstrap/Modal'
import AddVehicle from './AddVehicle';
import Account from './Account';

export default function Garage(props) {
    const {user, errors, postUserInfo} = props
    const [vehs, setVehs] = useState([])
    const [showVehForm, setShowVehForm] = useState(false)
    const [showAccForm, setShowAccForm] = useState(false)
    useEffect(() => {
        async function getGarage() {
            const res = await fetch("/getvehicles")
            const vehArr = await res.json()
            setVehs(vehArr)
        }
        getGarage()
    }, [showVehForm])
    return (
        <div>
            {showVehForm ? (
            <Modal show={true}><AddVehicle user={user} showVehForm={showVehForm} setShowVehForm={setShowVehForm}/></Modal>
            ):null}
            {showAccForm ? <Modal show={true}><Account errors={errors} user={user} postUserInfo={postUserInfo} setShowAccForm={setShowAccForm} showAccForm={showAccForm}/></Modal>:null}
            <>
            <div>
            <br/>
            <br/>
            
            <h2>{user.username}'s Garage</h2>
            <button onClick={() => setShowAccForm(true)} className="btn btn-sm btn-warning my-2">Edit Account</button>
            <button  onClick={() => setShowVehForm(true)}className="btn btn-sm btn-success">Add a Vehicle</button>
            <br/>
            <br/>
            <br/>
            <br/>
            
            </div>
            <div className="page-content">
            {vehs.map(vehicle => <FeedCard key={vehicle.id} {...vehicle}/> )}
            </div>
            </>
        </div>
    )
}
