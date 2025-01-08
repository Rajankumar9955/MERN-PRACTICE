

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const navigate=useNavigate()
    const [data,setMydata]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/students/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])

   

    
    const ans=data.map((key)=>{
        return(
            <>
               <tr>
                <td style={{border:"2px solid black"}}>{key.rollno}</td>
                <td style={{border:"2px solid black"}}>{key.name}</td>
                <td style={{border:"2px solid black"}}>{key.city}</td>
                <td style={{border:"2px solid black"}}>{key.fees}</td>
                <td>
                       <button onClick={()=>{navigate(`/editdata/${key._id}`)}}>Update</button>
                </td>
                <td>
                    <button onClick={()=>{DelData(key._id)}}>Delete</button>
                </td>
               </tr>
            
            </>
        )
    })
    return(
        <>
        <div>
           <h1 align="center">Update Data Here!! Data!!</h1>
           <table style={{border:"2px solid black",marginLeft:"40%"}}>
            <tr>
                <th style={{border:"2px solid black"}}>Rollno</th>
                <th style={{border:"2px solid black"}}>Name</th>
                <th style={{border:"2px solid black"}}>City</th>
                <th style={{border:"2px solid black"}}>Fees</th>
                <th style={{border:"2px solid black"}}>Update</th>
                <th style={{border:"2px solid black"}}>Delete</th>
            </tr>
            {ans}
           </table>
           </div>
        </>
    )
}
export default Update;