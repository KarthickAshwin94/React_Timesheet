import './App.css';
import DropDownList1 from './components/DropDownList1';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import DropDownList2 from './components/DropDownList2';
import Task from './components/Task.js';
import { useState } from 'react'; 
import SideBar from  './components/SideBar.js';

function App() {
  const [data,setData]=useState([{
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    sun: ""
  }])
  const [data_1,setData_1]=useState([{
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    sun: ""
  }])
  const handleClick=()=>{
    setData([...data,{mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",sun:""}])
  }
  const handleClick_1=()=>{
    setData_1([...data_1,{mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",sun:""}])
  }
  const handleDelete=(i)=>{
    const deleteVal = [...data]
    deleteVal.splice(i,1)
    setData(deleteVal)
  }
  const handleDelete_1=(i)=>{
    const deleteVal_1 = [...data_1]
    deleteVal_1.splice(i,1)
    setData_1(deleteVal_1)
  }
  const changeEvent=(e,i)=>{
    const {name,value}=e.target
    const onchangeVal = [...data]
    onchangeVal[i][name]=value
    setData(onchangeVal)
  }
  const changeEvent_1=(e,i)=>{
    const {name,value}=e.target
    const onchangeVal = [...data_1]
    onchangeVal[i][name]=value
    setData_1(onchangeVal)
  }
  const calculateRow_1=(i)=>{
    let sum = 0
    for(const key in data_1[i]) {
      if(data_1[i].hasOwnProperty(key)) {
        if(data_1[i][key] != '') {
          sum += parseInt(data_1[i][key])
        }
      }
    }
    return sum
  }
  const calculateRow=(i)=>{
    let sum = 0
    for(const key in data[i]) {
      if(data[i].hasOwnProperty(key)) {
        if(data[i][key] != '') {
          sum += parseInt(data[i][key])
        }
      }
    }
    return sum
  }
  

  return (
    <div className="new_app">
      <div className='home_new'>
      <SideBar />
      <div className='rightpart1'>
      <h2 class="five">Timesheet</h2>
      <br></br>
      <h6 class="six">Total Hours:0.0</h6>
      <br></br>
    
      <div style={{fontSize: "13px"}} className='toolbar'>Allocation Extension  </div>
      <br></br>
      <div style={{fontSize: "13px"}} className='toolbar'>Timesheet</div>
      <table className='table'>      
        <thead className='tablehead'> 
          <tr>
            <th scope="col1" style={{width: "10%"}}>Project Type</th>
            <th scope="col1">Project Name</th>
            <th scope="col1">Task</th>
            <th scope="col1">Comment</th>
            <th>Mon <tr>5</tr></th>
            <th>Tue <tr>6</tr></th>
            <th>Wed  <tr>7</tr></th>
            <th>Thu <tr>8</tr></th>
            <th>Fri <tr>9</tr></th>
            <th>Sat<tr>10</tr></th>
            <th>Sun<tr>11</tr></th>
            <th>Total</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='tablebody'>
        {
          data.map((val,i) => 
            <tr>
              <th scope="row">BAU Activity</th>
              <td>
                <DropDownList1 />
              </td>
              <td>
                <Task />
              </td>
              <td>
                <div className="card flex justify-content-center">
                  <input className='form-control' type='text'/>
                </div>
              </td>
              <td><input className='form-control' name='mon' value={val.mon} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td><input name='tue' value={val.tue} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td><input name='wed' value={val.wed} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td><input name='thu' value={val.thu} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td><input name='fri' value={val.fri} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td><input name='sat' value={val.sat} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td><input name='sun' value={val.sun} onChange={(e)=>changeEvent(e,i)} type='number'/></td>
              <td>{calculateRow(i)}</td>
              <td style={{fontSize: "30px"}}>
                <button onClick={handleClick} style={{border: "none", backgroundColor: "white", color: "#6a6c71"}}>+</button>
              </td>
              <td style={{fontSize: "30px"}}>
                <button onClick={handleDelete} style={{border: "none", backgroundColor: "white", color: "#6a6c71"}}>-</button>
              </td>
            </tr>
          )
        }
        {
          data_1.map((val,i) => 
            <tr>
              <th scope="row">Sales Activity</th>
              <td>
                <DropDownList2 />
              </td>
              <td>
                <Task />
              </td>
              <td>
                <div className="card flex justify-content-center">
                  <input className='form-control' type='text'/>
                </div>
              </td>
              <td><input name='mon' value={val.mon} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td><input name='tue' value={val.tue} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td><input name='wed' value={val.wed} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td><input name='thu' value={val.thu} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td><input name='fri' value={val.fri} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td><input name='sat' value={val.sat} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td><input name='sun' value={val.sun} onChange={(e)=>changeEvent_1(e,i)} type='number'/></td>
              <td>{calculateRow_1(i)}</td>
              <td style={{fontSize: "30px"}}>
                <button onClick={handleClick_1} style={{border: "none", backgroundColor: "white", color: "#6a6c71"}}>+</button>
              </td>
              <td style={{fontSize: "30px"}}>
                <button onClick={handleDelete_1} style={{border: "none", backgroundColor: "white", color: "#6a6c71"}}>-</button>
              </td>
            </tr>
          )
        }
        <tr>
          <th scope="row1">Total Hours</th>
          <td></td>
          <td></td>
          <td></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <div style={{display: "flex", justifyContent: "end"}}>
        <button className='saveandsubmit' style={{marginRight: "10px"}}>SAVE</button>
        <button className='saveandsubmit' style={{backgroundColor: "#FF6196"}}>SUBMIT</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;