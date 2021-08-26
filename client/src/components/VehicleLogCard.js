import React from "react";
import defImage from '../update.png'

export default function VehicleLogCard(props) {
  const {id, title, update_type, mileage, price, difficulty, description, images} = props
  let cardImage = defImage
 if (images !== undefined && images.length > 0){
   images.map(arr => {
    if (arr.update_id === id){
     cardImage = arr.url
    }
   })
 }
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
          alt="Thumbnail [100%x225]"
          data-holder-rendered="true"
          style={{ margin:"auto", height: "250px", width: "90%", display: "block", paddingTop:"0.6rem"}}
          src={cardImage}
        />
        <div className="card-body">
          <h4>{title}</h4>
          <p>Price: ${price.toLocaleString()}</p>
          <p>Mileage at time of {update_type}: {mileage.toLocaleString()}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            {/* <div className="btn-group">
               <button type="button" className="btn btn-sm btn-outline-secondary">
                Read More
              </button> 
            </div> */}
            <small className="text-muted">{update_type}</small>
            <small className="text-muted">Difficulty: {difficulty} </small>
          </div>
        </div>
      </div>
    </div>
  );
}
