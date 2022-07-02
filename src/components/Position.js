import React, { useContext, useEffect, useState } from "react";
import { GlobalContext, GlobalProvider } from "./context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Position=()=>{
    const navigate=useNavigate();
    const {details,bill,advance,advancesal,cashsale,fundIn,chequeAmt,cashUpdate} =useContext(GlobalContext);    
   var totalFund=0,cashinHand=0;   
    let today = new Date().toLocaleDateString();   
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
        <div style={{color:'red',textAlign:'center',margin:'30px'}}>            
        <h4>{details.company}</h4>
        <h5>{details.inputAddress}</h5>
        <h5>{details.inputCountry}</h5>
        <h5><small style={{color:'black',fontSize:'large',marginRight:'10px'}}>Tel. No:</small>{details.contact}</h5>
        </div>
        <div>
            <p style={{textAlign:'center',fontFamily:'cursive',color:'blueviolet',marginBottom:'20px'}}>PETTYCASH STATEMENT AS ON {today}</p>
            <div>
            <table class='container col-md-6 mx-auto' style={{borderTop:'1px solid black',borderBottom:'1px solid black',padding:'20px'}} >
                <tbody>

            <tr style={{borderTop:'1px solid black',background:'lightgrey',padding:'5px'}}>
                    <td style={{paddingLeft:'100px'}} >Opening Balance:</td>
                    <td >{details.openingbalance}</td>
                </tr>
                <tr style={{borderTop:'1px solid black'}}>
                    <td style={{paddingLeft:'100px'}}>Cash sales:</td>
                    <td>{cashsale}</td>
                </tr>
                <tr style={{borderTop:'1px solid black',background:'lightgrey'}}>
                    <td style={{paddingLeft:'100px'}}>Other Fund-In:</td>
                    <td>{fundIn}</td>
                </tr>
                <tr style={{borderTop:'1px solid black'}}>
                    <td style={{paddingLeft:'100px',fontWeight:'bold'}}>Total Fund Received:</td>
                    <td style={{fontWeight:'bold'}}>{totalFund=(+details.openingbalance)+(+cashsale)+(+fundIn)}</td>
                </tr>
                <tr style={{borderTop:'1px solid black',background:'lightgrey'}}>
                    <td style={{paddingLeft:'100px'}}>Bills:</td>
                    <td>({bill})</td>
                </tr>
                <tr style={{borderTop:'1px solid black'}}>
                    <td style={{paddingLeft:'100px'}}>Advances:</td>
                    <td>({advance})</td>
                </tr>
                <tr style={{borderTop:'1px solid black',background:'lightgrey'}}>
                    <td style={{paddingLeft:'100px'}}>Advance Salaries:</td>
                    <td>({advancesal})</td>
                </tr>
                <tr style={{borderTop:'1px solid black'}}>
                    <td style={{paddingLeft:'100px'}}>Cheque to Encash:</td>
                    <td>({chequeAmt})</td>
                </tr>
                <tr style={{borderTop:'1px solid black',borderBottom:'1px solid black',background:'lightgrey'}}>
                    <td style={{paddingLeft:'100px',fontWeight:'bold'}}>Cash In Hand:</td>
                    <td style={{fontWeight:'bold'}}>{
                    cashinHand=totalFund-bill-advance-advancesal-chequeAmt
                    }</td>                    
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </>
    )
};
export default Position;