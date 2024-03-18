import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  // console.log(selectedConversation);
  return (
    <div className="flex flex-col w-96">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-inherit px-4 py-2 mb-2 m-auto">
            <span className="label-text">
              <img className="h-12 w-12" src={selectedConversation.profilePic} alt="" />
            </span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <div className="bg-black h-1 w-44 m-auto"></div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-600 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
