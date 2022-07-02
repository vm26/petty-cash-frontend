
import React,{useContext} from "react";
import { CSVLink} from "react-csv";
import { GlobalContext } from "./context/GlobalContext";

import { useNavigate } from "react-router-dom";
const Display = () =>  {
    const navigate=useNavigate();
    const {bills,advances,advancesalary,cash,fund,cheque,bill,advance,advancesal,cashsale,fundIn,chequeAmt,handleBillDelete,handleAdvanceDelete,handleAdvanceSalaryDelete,handleCashSaleDelete,handleFundDelete,handleChequeDelete} =useContext(GlobalContext);
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
        <div style={{marginBottom:'50px',marginTop:'50px'}}>
        {/* bills */}
        <h5 style={{textAlign:'center',color:'red'}}>BILLS</h5>
        <CSVLink style={{border:'1px solid black',padding:'3px',marginLeft:'100px',background:'lightgrey',color:'black'}} data={bills} filename={"Bills.csv"}>Export</CSVLink>
        <table className='container col-md-8 mx-auto' style={{textAlign:'center'}} border={2}>
            <thead>
                <tr style={{background:'cyan'}}>
                    <th>Date</th>
                    <th>Bill Number</th>
                    <th>Bill Name</th>
                    <th>Payee</th>
                    <th>Allocation</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    bills.length>0?
                bills?.map((item)=>(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.billno}</td>
                        <td>{item.billname}</td>
                        <td>{item.payee}</td>
                        <td>{item.allocation}</td>
                        <td>{item.amount}</td>
                        <td onClick={()=>handleBillDelete(item._id)}>❌</td>
                    </tr>
                ))
                :                
                <tr>
                    <td colSpan={7}> No data available in table</td>
               
                </tr>
                }
            </tbody>
        </table>       
        <div style={{marginLeft:'1000px',fontWeight:'bold'}}>
            <span>Bills Total:</span>
            <span> {bill} </span>
        </div>
        

        {/* advances */}
        <h5 style={{textAlign:'center',color:'red',marginTop:'30px'}}>ADVANCES</h5>
        <CSVLink style={{border:'1px solid black',padding:'3px',marginLeft:'100px',background:'lightgrey',color:'black'}} data={bills} filename={"Advances.csv"}>Export</CSVLink>
        <table className='container col-md-8 mx-auto' style={{textAlign:'center'}} border={2}>
            <thead>
                <tr style={{background:'cyan'}}>
                    <th>Date</th>                    
                    <th>Employee Name</th>
                    <th>Employee Code</th>                    
                    <th>Amount</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {advances.length>0?
                advances?.map((item)=>(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.empname}</td>
                        <td>{item.empcode}</td>                        
                        <td>{item.amount}</td>
                        <td>{item.comment}</td>
                        <td onClick={()=>handleAdvanceDelete(item._id)}>❌</td>
                    </tr>
                )):
                <tr>
                <td colSpan={7}> No data available in table</td>
                </tr>
                }
            </tbody>
        </table>        
        <div style={{marginLeft:'1000px',fontWeight:'bold'}}>
            <span>Advances Total:</span>
            <span> {advance} </span>
        </div>

        {/* advancesalaries */}
        <h5 style={{textAlign:'center',color:'red',marginTop:'30px'}}>ADVANCE SALARY</h5>
        <CSVLink style={{border:'1px solid black',padding:'3px',marginLeft:'100px',background:'lightgrey',color:'black'}} data={bills} filename={"AdvanceSalaries.csv"}>Export</CSVLink>
        <table className='container col-md-8 mx-auto' style={{textAlign:'center'}} border={2}>
            <thead>
                <tr style={{background:'cyan'}}>
                    <th>Date</th>                    
                    <th>Employee Name</th>
                    <th>Employee Code</th>                    
                    <th>Amount</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {advancesalary.length>0?
                advancesalary?.map((item)=>(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.empname}</td>
                        <td>{item.empcode}</td>                        
                        <td>{item.amount}</td>
                        <td>{item.comment}</td>
                        <td onClick={()=>handleAdvanceSalaryDelete(item._id)}>❌</td>
                    </tr>
                )):
                <tr>
                 <td colSpan={7}> No data available in table</td>
                </tr>
                }
            </tbody>
        </table>        
        <div style={{marginLeft:'1000px',fontWeight:'bold'}}>
            <span>Advance Salaries Total:</span>
            <span> {advancesal} </span>
        </div>

        {/* cash sales */}
        <h5 style={{textAlign:'center',color:'red',marginTop:'30px'}}>CASH SALES</h5>
        <CSVLink style={{border:'1px solid black',padding:'3px',marginLeft:'100px',background:'lightgrey',color:'black'}} data={bills} filename={"CashSales.csv"}>Export</CSVLink>
        <table className='container col-md-8 mx-auto' style={{textAlign:'center'}} border={2}>
            <thead>
                <tr style={{background:'cyan'}}>
                    <th>Date</th> 
                    <th>Receipt No</th>                    
                    <th>Amount</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {cash.length>0?
                cash?.map((item)=>(
                    <tr>
                        <td>{item.date}</td>                        
                        <td>{item.recno}</td>                        
                        <td>{item.amount}</td>
                        <td>{item.comment}</td>
                        <td onClick={()=>handleCashSaleDelete(item._id)}>❌</td>
                    </tr>
                )):
                <tr>
               <td colSpan={7}> No data available in table</td>
                </tr>
                }
            </tbody>
        </table>        
        <div style={{marginLeft:'1000px',fontWeight:'bold'}}>
            <span>Cash Sales Total:</span>
            <span> {cashsale} </span>
        </div>
        {/* Fund in */}
        <h5 style={{textAlign:'center',color:'red',marginTop:'30px'}}>FUND-IN</h5>
        <CSVLink style={{border:'1px solid black',padding:'3px',marginLeft:'100px',background:'lightgrey',color:'black'}} data={bills} filename={"Funds.csv"}>Export</CSVLink>
        <table className='container col-md-8 mx-auto' style={{textAlign:'center'}} border={2}>
            <thead>
                <tr style={{background:'cyan'}}>
                    <th>Date</th> 
                    <th>Source</th>                    
                    <th>Employee Name</th>
                    <th>Amount</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {fund.length>0?
                fund?.map((item)=>(
                    <tr>
                        <td>{item.date}</td>                        
                        <td>{item.source}</td>                        
                        <td>{item.empname}</td>                        
                        <td>{item.amount}</td>
                        <td>{item.comment}</td>
                        <td onClick={()=>handleFundDelete(item._id)}>❌</td>
                    </tr>
                )):
                <tr>
                <td colSpan={7}> No data available in table</td>
                </tr>
                }
            </tbody>
        </table>        
        <div style={{marginLeft:'1000px',fontWeight:'bold'}}>
            <span>Funds Total:</span>
            <span> {fundIn} </span>
        </div>
        
        {/* Cheques */}
        <h5 style={{textAlign:'center',color:'red',marginTop:'30px'}}>CHEQUES</h5>
        <CSVLink style={{border:'1px solid black',padding:'3px',marginLeft:'100px',background:'lightgrey',color:'black'}} data={bills} filename={"Cheques.csv"}>Export</CSVLink>
        <table className='container col-md-8 mx-auto' style={{textAlign:'center'}} border={2}>
            <thead>
                <tr style={{background:'cyan'}}>
                    <th>Date</th>                                         
                    <th>Cheque No</th>
                    <th>Amount</th>
                    <th>Comment</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {cheque.length>0?
                cheque?.map((item)=>(
                    <tr>
                        <td>{item.date}</td>                        
                        <td>{item.chequeno}</td>                     
                         <td>{item.amount}</td>
                        <td>{item.comment}</td>
                        <td onClick={()=>handleChequeDelete(item._id)}>❌</td>
                    </tr>
                )):
                <tr>
                <td colSpan={7}> No data available in table</td>
                </tr>
                }
            </tbody>
        </table>       
        <div style={{marginLeft:'1000px',fontWeight:'bold'}}>
            <span>Cheques Total:</span>
            <span> {chequeAmt} </span>
        </div>
        </div>
        </>
    )
    }


export default Display;