import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import soundsFile from '../assets/sounds/sounds.mp3'


const useListenMessage = () => {
    const {socket} = useSocketContext();
    const {messages, setMessage} = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sounds = new Audio(soundsFile);
            sounds.play();
            setMessage([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket,setMessage,messages])
}

export default useListenMessage