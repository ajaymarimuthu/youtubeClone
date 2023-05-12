import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../../utils/constants"

const VideoContainer = () => {


  const fetchVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data=await res.json();
    console.log(data);
  }



  useEffect(() => {

    fetchVideos()

  }, [])


  return (
    <div>


    </div>
  )
}

export default VideoContainer