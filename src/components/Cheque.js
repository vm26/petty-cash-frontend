import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cheque=()=>{
  const navigate=useNavigate();
    const [cheque,setcheque]=useState({})
    const handleSubmit=()=>{        
        let saved= axios.post('http://localhost:5000/addcheque',{
            date:cheque.date,
            chequeno:cheque.chequeno, 
            amount:cheque.amount,
            comment:cheque.comment
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        if(saved)
        alert('Cheque Added successfully!! Delete respective bill/advances/advance salaries which u provided cheque');
    }
    const handleChange=(e)=>{
        var name=e.target.id;
        var value=e.target.value;
        setcheque((prevState)=>({
            ...prevState,
            [name]:value
        }));
        console.log(cheque);
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
        <h3 style={{color:'red',textAlign:'center',marginTop:'10px'}}>Cheque</h3>
        <div class="container col-md-8 mx-auto mt-5">
            
        <form onSubmit={()=>handleSubmit()}>
  <div class="form-group">
    <label for="date">Date:</label>
    <input type="date" class="form-control" id="date" onChange={handleChange}/>
    
  </div> 

  <div class="form-group">
  <label for="chequeno">Cheque No:</label>
    <input type="text" class="form-control" id="chequeno" onChange={handleChange} placeholder="Enter cheque number" />
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
}
export default Cheque;