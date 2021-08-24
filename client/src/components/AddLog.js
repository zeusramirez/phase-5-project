import React, {useState} from 'react'

export default function AddLog(props) {
    const {carData, setShowLogForm, showLogForm} = props
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [mileage, setMileage] = useState(0)
    const [price, setPrice] = useState(0)
    const [difficulty, setDifficulty] = useState(0)

    async function handleSubmit(e){
        e.preventDefault()
        let update = {
            vehicle_id: carData.id,
            title,
            update_type: type,
            mileage,
            difficulty,
            price,
            description
        }
        const res = await fetch("/addlog", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(update)
        })
        const data = await res.json()
        if (res.ok){
            console.log(data)
            setShowLogForm(false)
        }else {
            setErrors(data.errors)
            console.log(errors)
        }

    }
    return (
        <div className="container">
            <div className="row gutters">
            {errors !== [] ? (
            <div>
                {/* {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))} */}
            </div>)
            : null} 
            <div className="card h-100">
                <div className="card-body">
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h6 className="mb-2 text-primary">Entry Log Form</h6>
                        </div>
                        <div  className="col-8">
                            <div className="form-group">
                                <label >Title</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Entry Log Title"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label >Difficulty</label>
                                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} type="number" className="form-control" placeholder="Difficulty Rating">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label >Price</label>
                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="form-control"  placeholder="Price cost"/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label >Mileage</label>
                                <input value={mileage} onChange={(e) => setMileage(e.target.value)} type="number" className="form-control"  placeholder="Enter mileage"/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label >Type</label>
                                <select value={type} onChange={(e) => setType(e.target.value)} type="text" className="form-control"  placeholder="Type of Work">
                                    <option value="modification">Modification</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="repair">Repair</option>
                                </select>
                            </div>
                        </div>
                        <div >
                            <div className="form-group">
                                <label>Description of Work Done:</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)}  className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="text-right">
                                <button  onClick={()=> setShowLogForm(false)} className="btn btn-secondary">Cancel</button>
                                <button   onClick={handleSubmit} className="btn btn-primary add-veh">Submit Log</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
