import { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useSocketContext } from "../../context/socketContext";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const { socket } = useSocketContext();
  const { authUser } = useAuthContext();
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [userTyping, setUserTyping] = useState("");
  const { selectedConversation } = useConversation();

  const userWriting = (e) => {
    const userMessage = e.target.value;
    setMessage(userMessage);
    const userData = {
      username: authUser._id,
      targetUser: selectedConversation?._id,
    };
    socket.emit("typingToUser", userData);
  };

  useEffect(() => {
    const handleTypingNotification = (username) => {
      setUserTyping(username);
    };

    socket.on("typingNotification", handleTypingNotification);
    setTimeout(() => {
      setUserTyping(null);
    }, 3000);

    return () => {
      socket.off("typingNotification", handleTypingNotification);
    };
  }, [socket, userTyping, selectedConversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-auto h-10 text-xs italic pt-3">
        {userTyping == selectedConversation._id ? (
          <>
            <span>{selectedConversation.firstname} is typing</span>
            <span className="loading loading-dots loading-xs"></span>
          </>
        ) : (
          ""
        )}
      </div>
      <form className="px-4 my-3 " onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className=" bg-white opacity-60 text-sm rounded-lg block w-full p-2.5 bg-inherit border-gray-600 text-black outline-none"
            placeholder="Send a message"
            value={message}
            onChange={userWriting}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend className="w-5 h-5 text-gray-800 hover:text-blue-500" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default MessageInput;
