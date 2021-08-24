import React, {useState} from 'react'

export default function AddVehicle(props) {
    const {user, setShowVehForm, showVehForm} = props
    const [name, setName] = useState("")
    const [make, setMake] = useState("")
    const [miles, setMiles] = useState(0)
    const [year, setYear] = useState(0)
    const [model, setModel] = useState("")
    const [category, setCategory] = useState("")
    const [bio, setBio] = useState("")
    const [errors, setErrors] = useState([])
    

    async function handleCreate(e){
        e.preventDefault()
        const vehData = {
            user_id: user.id,
            mileage: miles,
            year,
            name,
            make,
            model,
            category,
            bio
        }
        const res = await fetch("/addvehicle", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(vehData)
        })
        const data = await res.json()
        if (res.ok){
            setShowVehForm(false)
        } else {
            setErrors(data.errors)
        }
    }
    return (
        <div className="container">
<div className="row gutters">
{errors !== [] ? (
      <div>
          {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))}
      </div>)
      : null} 
<div className="card h-100">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">Project Details</h6>
			</div>
			<div  className="col-8">
				<div className="form-group">
					<label >Name</label>
					<input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Project name"/>
				</div>
			</div>
            <div className="col-4">
				<div className="form-group">
					<label >Year</label>
					<input value={year} onChange={(e) => setYear(e.target.value)} type="number" className="form-control" placeholder="Vehicle year"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label >Make</label>
					<input value={make} onChange={(e) => setMake(e.target.value)} type="text" className="form-control"  placeholder="Vehicle make"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label >Model</label>
					<input value={model} onChange={(e) => setModel(e.target.value)} type="text" className="form-control" placeholder="Vehicle model"/>
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label >Category</label>
					<input value={category} onChange={(e) => setCategory(e.target.value)} type="text" className="form-control"  placeholder="Vehicle category"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label >Mileage</label>
					<input value={miles} onChange={(e) => setMiles(e.target.value)} type="number" className="form-control"  placeholder="Enter mileage"/>
				</div>
			</div>
            <div >
				<div className="form-group">
					<label>About this project:</label>
					<textarea value={bio} onChange={(e) => setBio(e.target.value)} className="form-control"></textarea>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
					<button type="button" onClick={()=> setShowVehForm(!showVehForm)} className="btn btn-secondary">Cancel</button>
					<button onClick={handleCreate} type="button" id="submit" name="submit" className="btn btn-primary add-veh">Add Vehicle</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
    )
}
