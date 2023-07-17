 
const ChatMessage = ({name,message}) => {
 
    
    return (
        <div className="flex items-center shadow-sm py-2">
            <img className="h-8" src="https://tse1.mm.bing.net/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" alt="user" />
            <span className="font-bold px-4"> {name}</span>
            <span>{message}</span>
     
 

        </div>
    )
}

export default ChatMessage