import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
const Staffadvance=()=>{
  const navigate=useNavigate(); 
    const [advance,setadvance]=useState({})
    const handleSubmit=()=>{   
        let saved= axios.post('https://petty-service.herokuapp.com/addadvancesalary',{
            date:advance.date,            
            empname:advance.empname,
            empcode:advance.empcode,            
            amount:advance.amount,
            comment:advance.comment
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        if(saved)
        alert('Advance Salary Added successfully');
      }
    const handleChange=(e)=>{
        var name=e.target.id;
        var value=e.target.value;
        setadvance((prevState)=>({
            ...prevState,
            [name]:value
        }));
        console.log(advance);
    }
    return(
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
          <h3 style={{color:'red',textAlign:'center',marginTop:'10px'}}>ADVANCE SALARY</h3>
        <div class="container col-md-8 mx-auto mt-5">
            
        <form onSubmit={()=>handleSubmit()}>
  <div class="form-group">
    <label for="date">Date:</label>
    <input type="date" class="form-control" id="date" onChange={handleChange}/>
    
  </div>
  <div class="form-group">
  <label for="empname">Employee Name:</label>
    <input type="text" class="form-control" id="empname" onChange={handleChange} placeholder="Enter Employee name" />
  </div>

  <div class="form-group">
  <label for="empcode">Employee Code:</label>
    <input type="text" class="form-control" id="empcode" onChange={handleChange} placeholder="Enter staff no" />
  </div>  
  <div class="form-group">
  <label for="amount">Amount:</label>
    <input type='text' class="form-control" id="amount" onChange={handleChange} placeholder="Enter amount" />
  </div>
  <div class="form-group">
  <label for="comment">Comment:</label>
    <input type='text' class="form-control" id="comment" onChange={handleChange} placeholder="Enter comment" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </>
    )
};
export default Staffadvance;