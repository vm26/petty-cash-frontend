import react from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const navigate=useNavigate();
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
        
        <div className='container'>
            <div className='col-md-6 mx-auto mt-5'>
            <Link to='/bills'><button style={{width:'150px',height:'80px'}} type="button" class="btn btn-secondary">Bills</button></Link>
            <Link to='/advance'><button style={{width:'150px',height:'80px',marginLeft:'20px'}}type="button" class="btn btn-secondary">Advance</button></Link>
            </div>
            <div className='col-md-6 mx-auto mt-5'>
            <Link to='/advancesalary'><button style={{width:'150px',height:'80px'}} type="button" class="btn btn-secondary">Staff Advance</button></Link>
            <Link to='/sales'><button style={{width:'150px',height:'80px',marginLeft:'20px'}}type="button" class="btn btn-secondary">Cash Sales</button></Link>
             </div>
            <div className='col-md-6 mx-auto mt-5'>
            <Link to='/fundin'><button style={{width:'150px',height:'80px'}} type="button" class="btn btn-secondary">Fund-In</button></Link>
            <Link to='/cheque'><button style={{width:'150px',height:'80px',marginLeft:'20px'}}type="button" class="btn btn-secondary">Make Cheque</button></Link>
               </div>
            <div className='col-md-6 mx-auto mt-5'>
            <Link to='/display'><button style={{width:'150px',height:'80px'}} type="button" class="btn btn-secondary">Display</button></Link>
            <Link to='/position'><button style={{width:'150px',height:'80px',marginLeft:'20px'}}type="button" class="btn btn-secondary">Position</button></Link>
             </div>
        </div>
        </>
    );
}
export default Home;