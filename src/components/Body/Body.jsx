import MainContainer from "../MainContainer/MainContainer"
import Sidebar from "../Sidebar/Sidebar"

 

const Body = () => {
  return (
    <div className="grid grid-flow-col">
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body