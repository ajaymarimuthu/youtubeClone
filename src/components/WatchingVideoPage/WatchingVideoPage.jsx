import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import LiveChat from "../LiveChat/LiveChat";
import { deleteMessages } from "../../utils/chatSlice";



const WatchingVideoPage = () => {

  const dispatch = useDispatch();

  let [searchParams] = useSearchParams();

  // console.log(searchParams.get("v"));



  useEffect(() => {

    dispatch(closeMenu())

    return (() => {
      dispatch(deleteMessages())
    })

  }, [])

  return (
    <div className="flex flex-col ">
      <div className="p-5 m-5 flex">
        <div>

          <iframe width="1050" height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>

        </div>


        <div className="w-full">
          <LiveChat />
        </div>

      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchingVideoPage