import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const navigate=useNavigate();
    const [details,setdetails]=useState({});
    useEffect(()=>{
         axios.get('https://petty-service.herokuapp.com/getcompanydetails').then(res=>{setdetails(res.data.datas[0]);console.log(res.data.datas[0])})
            .catch(err=>console.log(err));
    },[])
    const handleSave=()=>{
        const saved=axios.post('https://petty-service.herokuapp.com/addcompanydetails',{
        company:details.company,
        contact:details.contact,
        currency:details.currency,
        inputAddress:details.inputAddress,
        inputCity:details.inputCity,
        inputCountry:details.inputCountry,
        openingbalance:details.openingbalance
        }).then(res=>console.log(res))
        .catch(err=>console.log(err));
        if(saved){
            alert('Details Saved successfully');
        }
    }
    const handleChange=(e)=>{
        var name=e.target.id;
        var value=e.target.value;
        setdetails((prevState)=>({
            ...prevState,
            [name]:value
        }));
        console.log(details);
    }
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#" onClick={()=>{navigate('/');}}>PettycashWeb</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'flex-end'}}>
   
<ul class="navbar-nav">
        <li class="nav-item active" >
        <a className="nav-link" href="#" onClick={()=>navigate('/home')}>Home <span className="sr-only">(current)</span></a>
        </li>  
        
        <li class="nav-item active">        
          <a className="nav-link" href="#" onClick={()=>navigate('/settings')}>Settings</a>
        </li> 
        <li class="nav-item active">        
          <a className="nav-link" href="#" onClick={()=>navigate('/history')}>History</a>
        </li>
        <li class="nav-item active">
          <a className="nav-link" href="#" onClick={()=>{navigate('/');}}>Logout</a>
        </li> 
        </ul> 
        </div>
        </nav>
    <div class="container col-md-8 mx-auto mt-5">
      <h3 class="container col-md-4 mx-auto">---Account Settings---</h3>

      <form onSubmit={()=>handleSave()}>
        <div class="form-group col-md-4 mx-auto">
          <label for="obalance">Opening Balance:</label>
          <input type="number" class="form-control" id="openingbalance" placeholder="0.00" value={details?.openingbalance} onChange={handleChange} required/>
        </div>
        <div class="form-group">
          <label for="company">Company Name:</label>
          <input type="text" class="form-control" id="company"  onChange={handleChange} value={details?.company}/>
        </div>

        <div class="form-group">
          <label for="inputAddress">Address:</label>
          <input type="text" class="form-control" id="inputAddress" value={details?.inputAddress} onChange={handleChange}/>
        </div>
        <div class="form-group ">
          <label for="inputCity">City:</label>
          <input type="text" class="form-control" id="inputCity"  onChange={handleChange}  value={details?.inputCity}/>
        </div>

        <div class="form-group">
          <label for="inputCountry">Country:</label>
          <select id="inputCountry" class="form-control" onChange={handleChange} value={details?.inputCountry}>
            <option selected >---Choose Country--- </option>            
            <option value="Singapore">Singapore</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>
        </div>
        <div class="form-group ">
          <label for="contact">Contact:</label>
          <input
            type="tel"
            class="form-control"
            id="contact"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            onChange={handleChange}
            value={details?.contact}
            
          />
        </div>
        <div class="form-group">
          <label for="currency">Currency:</label>
          <select id="currency" class="form-control" onChange={handleChange} value={details?.currency}>
            <option selected >---Choose Currency--- </option>
            <option value="Singapore dollar-SGD">Singapore dollar-SGD</option>
            <option value="United Arab Emirates dirham-AED">United Arab Emirates dirham-AED</option>
            <option value="United States dollar-USD">United States dollar-USD</option>
            <option value="Canadian dollar-CAD">Canadian dollar-CAD</option>
            <option value="Indian Rupee-INR">Indian Rupee-INR</option>
          </select>
        </div>

        <button type="submit" class="btn btn-info">
          Save
        </button>
      </form>
    </div>
        </>
  );
};
export default Settings;
