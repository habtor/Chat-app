import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col w-full mx-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex flex-col items-center  px-4 py-2 mb-2 m-auto">
            <span className="label-text">
              <img
                className="h-12 w-12"
                src={selectedConversation.profilePic}
                alt=""
              />
            </span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <div className="px-10">
            <div className="h-[1px] w-full bg-gray-400 mx-auto mb-8 p"></div>
          </div>
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
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
