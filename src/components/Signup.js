import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import SpinnerShow from './Spinner';

const Signup=()=>{
    
    const [email,setemail]=useState('');
    
    const [cpassword,setcpassword]=useState('');
    const [password,setpassword]=useState('');
    const [message,setmessage]=useState('Fill the details');
    const [spinner,setspinner]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=async()=>{
        setspinner(true);
        let res= await axios.post(`http://localhost:5000/register`,{email,password,cpassword});
        if((res.data.statusCode==200)||(res.data.statusCode==300)){            
            setspinner(false);
            setmessage(res.data.message);
            setTimeout(() => {
              navigate('/login');
            }, 1000); 
                   }        
    }
    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#" onClick={()=>{navigate('/')}}>PettycashWeb</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'flex-end'}}>
  <ul class="navbar-nav">
          <li class="nav-item active">
        <a className="nav-link" href="#" onClick={()=>navigate('/login')}>Login</a>
      </li> 
      <li class="nav-item active">
        <a className="nav-link" href="#" onClick={()=>navigate('/signup')}>Signup</a>
      </li> 
      </ul>

  </div>
  </nav>
      <div class="container col-md-4 mx-auto mt-5" style={{border:'1px solid blue',padding:'50px'}}>
                 <h5 style={{textAlign:'center',color:'red'}}>Signup</h5>
            <Form>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>setcpassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" onClick={()=>handleSubmit()}>
                    Submit
                </Button>
                {
                    spinner?
                    <SpinnerShow/>:
                    <></>
                }
            </Form>
            {
                message ?
    <div style={{textAlign:'center',color:'red'}}>{message}
        </div>                        
                    : <></>}
        </div>
      </>
      
    );
}
export default Signup;