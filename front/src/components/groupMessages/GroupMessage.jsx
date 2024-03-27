import { useAuthContext } from "../../context/AuthContext";
import { extractTime, extractDate } from "../../utils/extractTime";

const GroupMessage = ({ message }) => {
  const { authUser } = useAuthContext();

  const fromMe = message.sender._id === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const messageDay = extractDate(message?.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : message.sender?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

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
          {message.content}
        </div>
        <div className="chat-footer text-gray-700 text-xs flex gap-1 items-center">
          {`${formattedTime} ${messageDay}`}
        </div>
      </div>
    </>
  );
};
export default GroupMessage;
