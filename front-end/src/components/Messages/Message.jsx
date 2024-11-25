import { useAuthContext } from "../../context/authContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";


const Message = ({message}) => {
  const {authUser, setAuthUser} = useAuthContext();

  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? 'bg-blue-500' : "bg-pink-500";
  const shakeAnimaton = message.shouldShake ? "shake" : "";
  


  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={profilePic} alt="User Avater" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500 ${bubbleColor} ${shakeAnimaton} pb 2`}>
            {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formatedTime}
        </div>
    </div>
  )
}

export default Message;