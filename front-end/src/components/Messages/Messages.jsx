import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessagesSkeletons from "../../skilitons/MessagesSkeletons";
import Message from "./Message"
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef()
  useEffect(() => {
    if(lastMessageRef.current) {
      setTimeout(() => {
        lastMessageRef.current.scrollIntoView({behavior: 'smooth', block: 'nearest'})
      }, 100)
    }
  
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">

        {!loading && messages.length > 0 && messages.map((message) => (
         <div  key={message._id} ref={lastMessageRef}>
          <Message message={message} />
         </div>
        ))}

        {loading && [...Array(3)].map((_, idx) => <MessagesSkeletons key={idx}/> )}
        {!loading && messages.length === 0 && (
          <p className="text-center">First Move na to Start Conversation</p>
        )}
     
    </div>
  )
}

export default Messages