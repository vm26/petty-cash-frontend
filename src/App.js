import { Routes, Route, useNavigate } from "react-router-dom";
import Advance from "./components/Advance";
import Bills from "./components/Bills";
import Settings from "./components/Settings";
import Display from "./components/Display";
import Staffadvance from "./components/Staffadvance";
import Position from "./components/Position";
import CashSales from "./components/CashSales";
import FundIn from "./components/FundIn";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalProvider } from "./components/context/GlobalContext";
import Cheque from "./components/Cheque";
import History from "./components/History";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() { 
  var bill = 0,
    advance = 0,
    advancesal = 0,
    cashsale = 0,
    fundIn = 0,
    chequeAmt = 0;
  const [history, sethistory] = useState([]);
  const [bills, setbills] = useState([]);
  const [details, setdetails] = useState({});
  const [cash, setcash] = useState([]);
  const [fund, setfund] = useState([]);
  const [cheque, setcheque] = useState([]);
  const [advances, setadvances] = useState([]);
  const [advancesalary, setadvancesalary] = useState([]);
  const [counter, setcounter] = useState(0);  
  useEffect(() => {
    axios
      .get("http://localhost:5000/getcompanydetails")
      .then((res) => {
        setdetails(res.data.datas[0]);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/getbills")
      .then((res) => {
        setbills(res.data.datas);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/getadvances")
      .then((res) => {
        setadvances(res.data.datas);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/getadvancesalaries")
      .then((res) => {
        setadvancesalary(res.data.datas);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/getcashsales")
      .then((res) => {
        setcash(res.data.datas);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/getfunds")
      .then((res) => {
        setfund(res.data.datas);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/getcheques")
      .then((res) => {
        setcheque(res.data.datas);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/gethistory")
      .then((res) => {
        sethistory(res.data.datas);
      })
      .catch((err) => console.log(err));
  }, [counter]);
 
  //Delete functions
  const handleBillDelete = (id) => {
    axios.delete(`http://localhost:5000/deletebill/${id}`)
      .then((res) => {
        setcounter(counter + 1);
        alert("Bill deleted successfully");
      })
      .catch((err) => console.log(err));
  };
  const handleAdvanceDelete = (id) => {
     axios.delete(`http://localhost:5000/deleteadvance/${id}`)
      .then((res) => {
        setcounter(counter + 1);
        alert("Advance deleted successfully");
      })
      .catch((err) => console.log(err));    
  };
  const handleAdvanceSalaryDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteadvancesalary/${id}`)
      .then((res) => {
        setcounter(counter + 1);
        alert("Advance Salary deleted successfully");
      })
      .catch((err) => console.log(err));
  };
  const handleCashSaleDelete = (id) => {
   axios.delete(`http://localhost:5000/deletecashsale/${id}`)
      .then((res) => {
        setcounter(counter + 1);
        alert("Cash Sale deleted successfully");
      })
      .catch((err) => console.log(err));
  };
  const handleFundDelete = (id) => {
   axios.delete(`http://localhost:5000/deletefund/${id}`)
      .then((res) => {
        setcounter(counter + 1);
        alert("Fund deleted successfully");
      })
      .catch((err) => console.log(err));   
  };
  const handleChequeDelete = (id) => {
    axios.delete(`http://localhost:5000/deletecheque/${id}`)
      .then((res) => {
        setcounter(counter + 1);
        alert("Cheque deleted successfully");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      {bills?.map((item) => {
        bill = bill + +item.amount;
      })}
      {advances?.map((item) => {
        advance = advance + parseInt(item.amount);
      })}
      {advancesalary?.map((item) => {
        advancesal = advancesal + parseInt(item.amount);
      })}
      {cash?.map((item) => {
        cashsale = cashsale + parseInt(item.amount);
      })}
      {fund?.map((item) => {
        fundIn = fundIn + parseInt(item.amount);
      })}

      {cheque?.map((item) => {
        chequeAmt = chequeAmt + parseInt(item.amount);
      })}
      <GlobalProvider
        value={{
          history,
          details,
          bills,
          advances,
          advancesalary,
          cash,
          fund,
          cheque,
          bill,
          advance,
          advancesal,
          cashsale,
          fundIn,
          chequeAmt,                   
          handleBillDelete,
          handleAdvanceDelete,
          handleAdvanceSalaryDelete,
          handleCashSaleDelete,
          handleFundDelete,
          handleChequeDelete,
        }}
      >
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/advance" element={<Advance />} />
          <Route path="/display" element={<Display />} />
          <Route path="/advancesalary" element={<Staffadvance />} />
          <Route path="/position" element={<Position />} />
          <Route path="/sales" element={<CashSales />} />
          <Route path="/fundin" element={<FundIn />} />
          <Route path="/cheque" element={<Cheque />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}
export default App;
