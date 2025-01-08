import { useEffect, useState } from "react";
import axios from "axios";
const Display=()=>{
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
               </tr>
            
            </>
        )
    })
    return(
        <>
        <div>
           <h1 align="center">Displayed Data!!</h1>
           <table style={{border:"2px solid black",marginLeft:"40%"}}>
            <tr>
                <th style={{border:"2px solid black"}}>Rollno</th>
                <th style={{border:"2px solid black"}}>Name</th>
                <th style={{border:"2px solid black"}}>City</th>
                <th style={{border:"2px solid black"}}>Fees</th>
            </tr>
            {ans}
           </table>
           </div>
        </>
    )
}
export default Display;