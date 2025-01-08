import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const [name,setName]=useState({});

    const [mydata,setMydata]=useState([])
     const handleSubmit=()=>{
        let api="http://localhost:8000/students/datasearch"
        axios.post(api,{name:name}).then((res)=>{
           setMydata(res.data);
        })
     }    
     const ans=mydata.map((key)=>{
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
        <div align="center">
           <h1>Search Sections</h1>
           <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
           <button onClick={handleSubmit}>Submit</button>
           <hr />
           <table style={{border:"2px solid black"}}>
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
export default Search;