import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
const Bills=()=>{
  const navigate=useNavigate();
    const [bill,setbill]=useState({})    
    const handleSubmit=()=>{     
        let saved= axios.post('https://petty-service.herokuapp.com/addbills',{
            date:bill.date,
            billno:bill.billno,
            billname:bill.billname,
            payee:bill.payee,
            allocation:bill.allocation,
            amount:bill.amount
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        if(saved)
        {  alert('Bill Added successfully');
         navigate('/home');
        }
    }
    const handleChange=(e)=>{
        var name=e.target.id;
        var value=e.target.value;
        setbill((prevState)=>({
            ...prevState,
            [name]:value
        }));
        console.log(bill);
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
        <h3 style={{color:'red',textAlign:'center',marginTop:'10px'}}>BILL</h3>
        <div class="container col-md-8 mx-auto mt-5">
            
        <form onSubmit={()=>handleSubmit()}>
  <div class="form-group">
    <label for="date">Date:</label>
    <input type="date" class="form-control" id="date" onChange={handleChange}/>
    
  </div>
  <div class="form-group">
  <label for="billno">Bill Number:</label>
    <input type="text" class="form-control" id="billno" onChange={handleChange} placeholder="Enter Bill number" />
  </div>

  <div class="form-group">
  <label for="billname">Bill Name:</label>
    <input type="text" class="form-control" id="billname" onChange={handleChange} placeholder="Enter Bill name" />
  </div>
  <div class="form-group">
  <label for="payee">Payee:</label>
    <input type="text" class="form-control" id="payee" onChange={handleChange} placeholder="Amount collected by"/>
  </div>
  <div class="form-group">
  <label for="allocation">Allocation:</label>
    <input type="text" class="form-control" id="allocation" onChange={handleChange} placeholder="For what purpose?" />
  </div>
  <div class="form-group">
  <label for="amount">Amount:</label>
    <input type="text" class="form-control" id="amount" onChange={handleChange} placeholder="Enter amount" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </>

    )
}
export default Bills;
