import useGroup from "../../zustand/useGroup";
import GroupMessageInput from "./GroupMessageInput";
import GroupMessages from "./GroupMessages";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import GroupNav from "./GroupNav";

const GroupMessageContainer = () => {
  const { selectedGroup, setSelectedGroup } = useGroup();

  useEffect(() => {
    return () => setSelectedGroup(null);
  }, [setSelectedGroup]);

  return (
    <div
      className={`flex flex-col w-full mx-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-2xl sm:rounded-tl-none sm:rounded-bl-none xl:rounded-br-none xl:rounded-tr-none `}
    >
      {!selectedGroup ? (
        <NoChatSelected />
      ) : (
        <>
          <GroupNav />
          <div className="px-10">
            <div className="h-[1px] w-full bg-gray-400 mx-auto mb-8 p"></div>
          </div>
          <GroupMessages />
          <GroupMessageInput />
        </>
      )}
    </div>
  );
};
export default GroupMessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} </p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
