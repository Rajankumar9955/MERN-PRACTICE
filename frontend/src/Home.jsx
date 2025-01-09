

import axios from "axios"
const Home=()=>{
    const loadData1=()=>{
        let api="http://localhost:8000/";
        axios.get(api).then((res)=>{
            console.log(res.data)
        })
    }

    const loadData2=()=>{
        let api="http://localhost:8000/about";
        axios.get(api).then((res)=>{
            console.log(res.data)
        })
    }
    const loadData3=()=>{
        let api="http://localhost:8000/service";
        axios.get(api).then((res)=>{
            console.log(res.data)
        })
    }
    const loadData4=()=>{
        let api="http://localhost:8000/contact";
        axios.get(api).then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <>
        <div align="center"> 
           <h1>Home Sections</h1>
           <button onClick={()=>{loadData1()}}>Home </button>
           <button onClick={()=>{loadData2()}}>About</button>
           <button onClick={()=>{loadData3()}}>Service</button>
           <button onClick={()=>{loadData4()}}>Contact</button>


           </div>
        </>
    )
}
export default Home;