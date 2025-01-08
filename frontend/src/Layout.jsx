


import { Outlet } from "react-router-dom";
import TopMenu from "./Componets/TopMenu";
import Footer from "./Componets/Footer";
const Layout=()=>{
    return(
        <>
              <TopMenu/>

              <div>
                <Outlet/>
              </div>
              <div>
                <Footer/>
              </div>
        </>
    )
}
export default Layout;