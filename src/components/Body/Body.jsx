// import MainContainer from "../MainContainer/MainContainer"
import Sidebar from "../Sidebar/Sidebar"
import { Outlet } from "react-router-dom"
 

const Body = () => {
  return (
    <div className="grid grid-flow-col m-2">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body