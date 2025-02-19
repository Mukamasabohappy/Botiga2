import React from "react";
import Sidebar from './Sidebar.jsx'
import DashNavbar from './DashNavbar.jsx';
import { Outlet } from "react-router-dom";
function DashboardLayout(){
    return(
<div>
<Sidebar/>
<DashNavbar/>
<Outlet/>

</div>
    )

}
export default DashboardLayout;