import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../../utils/appSlice";
import {   useSearchParams } from "react-router-dom";

 

const WatchingVideoPage = () => {

  const dispatch=useDispatch();
 
 let [searchParams] = useSearchParams();

console.log(searchParams.get("v"));

 

  useEffect(()=>{

    dispatch(closeMenu())

  },[])

  return (
    <div className="p-5 m-5">
       <iframe width="1050" height="550"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
         title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
       </iframe>
    </div>
  )
}

export default WatchingVideoPage