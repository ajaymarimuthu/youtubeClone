
import { useSelector } from "react-redux"


const Sidebar = () => {

  const isMenuOpen= useSelector(state=>state.app.isMenuOpen)
 
  //Early Return
  if(!isMenuOpen) return null; 

  return (

    // {sidebarToggle ?}
    <div className="p-5 shadow-lg col-span-1">
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>


      <h1 className="font-bold py-5">Subsriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold py-5">Subsriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold py-5">Subsriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>


    </div>
  )
}

export default Sidebar