import { useAuthContext } from "../../context/AuthContext";
import { extractTime, extractDate } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const messageDay = extractDate(message?.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  console.log(message);
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble max-w-96 font-light text-white ${bubbleBgColor}  pb-2`}
        >
          {message.message}
        </div>
        <div className="chat-footer text-gray-700 text-xs flex gap-1 items-center">
          {`${formattedTime} ${messageDay}`}
        </div>
      </div>
    </>
  );
};
export default Message;
