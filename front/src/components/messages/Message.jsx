import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
  const extractTime = (dateString) => {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  };

  // Helper function to pad single-digit numbers with a leading zero
  const padZero = (number) => {
    return number.toString().padStart(2, "0");
  };
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-startr";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-600" : "bg-red-300";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-slate-600">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-black pb-2 ${bubbleBgColor}`}>ddd</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};
export default Message;
