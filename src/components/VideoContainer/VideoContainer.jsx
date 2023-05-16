import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../../utils/constants"
import VideoCard from "../VideoCard/VideoCard"

const VideoContainer = () => {

  const [videos,setVideos] = useState()


  const fetchVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data=await res.json();
    console.log(data.items);
    setVideos(data.items)

    // console.log(data.items[0].snippet);
  }

  // console.log(videos);



  useEffect(() => {

    fetchVideos()

  }, [])


  if(!videos) return null;


  return (
    <div className="flex flex-wrap justify-center items-center mt-5">

        
      {videos?.map((video,idx)=>{
        return <VideoCard key={idx} info={video} maxlength={20}/>
      })}


      


    </div>
  )
}

export default VideoContainer