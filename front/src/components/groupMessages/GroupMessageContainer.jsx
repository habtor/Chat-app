import useGroup from "../../zustand/useGroup";
import GroupMessageInput from "./GroupMessageInput";
import GroupMessages from "./GroupMessages";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { TfiPencil } from "react-icons/tfi";

const GroupMessageContainer = () => {
  const { selectedGroup, setSelectedGroup } = useGroup();
  //   console.log(selectedGroup);

  const heandleHide = () => {
    setSelectedGroup(null);
  };

  useEffect(() => {
    return () => setSelectedGroup(null);
  }, [setSelectedGroup]);

  return (
    <div
      className={`flex flex-col w-full mx-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-2xl sm:rounded-tl-none sm:rounded-bl-none `}
    >
      {!selectedGroup ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex  items-center">
            <div className="p-5">
              <IoArrowBackOutline
                className="cursor-pointer h-full w-full hover:text-blue-500 text-xl"
                onClick={() => heandleHide()}
              />
            </div>
            <div className="flex flex-col items-center  px-4 py-2 mb-2 m-auto">
              <img
                className="h-12 w-12 rounded-full"
                src={selectedGroup.image}
                alt=""
              />
              <span className="text-gray-900 font-bold">
                {selectedGroup.name}
              </span>
            </div>
            <div>
              <TfiPencil className="h-6 w-12 cursor-pointer hover:text-blue-500 transition-all pr-5" />
            </div>
          </div>
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
