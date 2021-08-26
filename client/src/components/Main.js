import React from 'react'
import FeedCard from './FeedCard'
import "./FeedCard.scss";
import { useEffect, useState } from 'react';


export default function Main(props) {
    const {user, followFeed} = props
    const [vehArr, setVehArr] = useState([])
    useEffect(() => {
    async function getVehicles() {
    const res = await fetch('/vehicles')
    const vehiclesData = await res.json()
    setVehArr(vehiclesData)
    }
    getVehicles()
    }, [])
    return (
        <div>
            <h2>Welcome to ProjectBuild</h2>
            <p>Where car enthusiasts can come together and share their projects and car builds!</p>
                {user && followFeed.length > 0 ? (<><h2>Followed Projects</h2> <div className="page-content">{followFeed.sort(() => Math.random() - 0.5).map(vehicle => <FeedCard key={vehicle.id} {...vehicle}/>)}</div><h2>All Projects</h2></>):null}
                
            <div className="page-content">
            {vehArr.sort(() => Math.random() - 0.5).map(vehicle => <FeedCard key={vehicle.id} {...vehicle}/>)}
            </div>
        </div>
    )
}
