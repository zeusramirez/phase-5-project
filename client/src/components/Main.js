import React from 'react'
import FeedCard from './FeedCard'
import "./FeedCard.scss";
import { useEffect, useState } from 'react';


export default function Main() {
    const [vehArr, setVehArr] = useState([])
    useEffect(() => {
    async function getVehicles() {
    const res = await fetch('/vehicles')
    const vehiclesData = await res.json()
    setVehArr(vehiclesData)
    }
    getVehicles()
    }, [])
    // console.log(vehArr)
    return (
        <div>
            <h2>Welcome to ProjectBuild</h2>
            <p>Where car enthusiasts can come together and share their projects and car builds!</p>
            <div className="page-content">
            {vehArr.map(vehicle => <FeedCard key={vehicle.id} {...vehicle}/>)}
            </div>

        </div>
    )
}
