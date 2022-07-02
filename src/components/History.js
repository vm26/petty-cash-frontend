import React, { useContext} from "react";
import { GlobalContext } from "./context/GlobalContext";
import { CSVLink } from "react-csv";

import { useNavigate } from "react-router-dom";
const History = () => {
    const navigate=useNavigate();
 const { history } = useContext(GlobalContext);
  let today = new Date().toLocaleDateString();
  let date = today.toString();
  let month = date.slice(0, 2);
  let year = date.slice(3);
  let newdate = month + "1" + year; 
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
      <h5 style={{textAlign:'center',color:'green',margin:'20px'}}>
        All transactions of this month from {newdate} till {today}
      </h5>
      
      <h5 style={{ textAlign: "center", color: "red" }}>HISTORY</h5>
      <CSVLink
        style={{
          border: "1px solid black",
          padding: "3px",
          marginLeft: "100px",
          background: "lightgrey",
          color: "black",
        }}
        data={history}
        filename={"History.csv"}
      >
        Export
      </CSVLink>
      <table
        className="container col-md-8 mx-auto"
        style={{ textAlign: "center" }}
        border={2}
      >
        <thead>
          <tr style={{ background: "cyan" }}>
            <th>Date</th>
            <th>Amount</th>
            <th>Comment</th>
            <th>Category</th>
            <th>Credited/Debited</th>
          </tr>
        </thead>
        <tbody>
          {history?.length > 0 ? (
            history?.map((item) => (
              <tr>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                {item.comment ? (
                  <td>{item.comment}</td>
                ) : (
                  <td>{item.allocation}</td>
                )}
                <td>{item.category}</td>
                {
                    ((item.category=='bill')||(item.category=='advance')||(item.category=='advancesal'))?
                    <td>Dr</td>
                    :
                    <td>Cr</td>
                }
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}> No data available in table</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </>
  );
};
export default History;
