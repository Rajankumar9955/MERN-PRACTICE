import { useState } from "react";

import axios from "axios"
const Insert=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        const {name,value}=e.target;
       setInput(values=>({...values,[name]:value}))
       console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:8000/students/datasave";
        axios.post(api,input).then((res)=>{
            alert("Data Added!!");
        })

    }
    return(
        <>
        <div align="center" style={{marginTop:"40px"}}>
             Enter Rollno : <input type="text" name="rollno" value={input.rollno} onChange={handleInput} /><br />
             Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput} /><br />
             Enter City : <input type="text" name="city" value={input.city} onChange={handleInput} /><br />
             Enter Fees : <input type="text" name="fees" value={input.fees} onChange={handleInput} /><br />
             <button onClick={handleSubmit}>Submit!!</button>
             </div>
        </>
    )
}
export default Insert;