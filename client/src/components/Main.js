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
    // if (user != null){
    //     vehArr.map(vehicle => {
    //         user.followings.map(follow => {
    //             if (follow.id === vehicle.id){
    //                 setFollowFeed(...followFeed, vehicle)
    //                 console.log("+1 Followed Vehicle!")
    //             }
    //         })
    //     })
    // }
    }
    getVehicles()
    }, [])
    return (
        <div>
            <h2>Welcome to ProjectBuild</h2>
            <p>Where car enthusiasts can come together and share their projects and car builds!</p>
            <div className="page-content">
                {user && followFeed.length > 0 ? (<><h4>Followed Projects</h4> {followFeed.map(vehicle => <FeedCard key={vehicle.id} {...vehicle}/>)}</>):null}
                <h2>All Projects</h2>
            {vehArr.map(vehicle => <FeedCard key={vehicle.id} {...vehicle}/>)}
            </div>
        </div>
    )
}
