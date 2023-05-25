import ButtonList from "../ButtonList/ButtonList"
import VideoContainer from "../VideoContainer/VideoContainer"

 

const MainContainer = () => {
  return (
    <div className="flex flex-col col-span-10 shadow-lg ">

      <ButtonList/>
      <VideoContainer/>
       
    </div>
  )
}

export default MainContainer