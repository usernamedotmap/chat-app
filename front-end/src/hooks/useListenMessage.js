import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";


const useListenMessage = () => {
    const {socket} = useSocketContext();
    const {messages, setMessage} = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessage([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket,setMessage,messages])
}

export default useListenMessage