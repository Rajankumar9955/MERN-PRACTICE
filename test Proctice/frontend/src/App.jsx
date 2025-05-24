

import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Layout from "./Layout"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import Update from "./Pages/Update"
import EditData from "./Pages/EditData"
import Search from "./Pages/Search"
const App=()=>{
    return(
        <>
        <BrowserRouter>
                     <Routes>
                            <Route path="/" element={<Layout/>}>
                               <Route path="home" element={<Home/>}/>
                               <Route path="insert" element={<Insert/>}/>
                               <Route path="display" element={<Display/>}/>
                               <Route path="update" element={<Update/>}/>
                               <Route path="editdata" element={<EditData/>}/>
                               <Route path="search" element={<Search/>}/>
                            </Route>
                     </Routes>
        </BrowserRouter>
        </>
    )
}
export default App