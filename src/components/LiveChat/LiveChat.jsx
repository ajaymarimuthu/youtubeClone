import { useEffect } from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../utils/chatSlice"
import { generateRanodmName } from "../../utils/helpre"
import { WordGenerator } from "../../utils/helpre"

const LiveChat = () => {


  const dispatch = useDispatch()
  const chatMessage = useSelector(store => store.chat.messages)

  // console.log(chat);


  useEffect(() => {

    // API POLLING FOR EVERY 2 SECONDS

    const interval = setInterval(() => {

      let word= WordGenerator()+ WordGenerator()
 

      dispatch(addMessage({
        name: generateRanodmName(),
        message: word
      }));

    }, 200)


    return () => {
      clearInterval(interval)
    }

  }, [])


  return (
    <div className="h-[550px] ml-2 p-2 bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse outline-none">
      {chatMessage.map((chat,idx) =>  {
        return <ChatMessage key={idx} name={chat.name} message={chat.message} />
      }
      )}
    </div>
  )
}

export default LiveChat



