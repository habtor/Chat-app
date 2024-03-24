import MessageContainer from "../../components/messages/MessagesContainer";
import GroupMessageContainer from "../../components/groupMessages/GroupMessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";
import useGroup from "../../zustand/useGroup";
import chatFilter from "../../zustand/chatFilter";

const Home = () => {
  const { selectedFilter } = chatFilter();
  const { selectedConversation } = useConversation();
  const { selectedGroup } = useGroup();
  return (
    <div className="flex sm:w-full h-full sm:h-3/4 w-[306px] max-w-[1200px]  p-1 border-[4px] border-gray-200 border-opacity-70 rounded-3xl  text-black">
      <div className="flex w-full max-w-[1200px] rounded-3xl  text-black">
        <div
          className={`sm:flex rounde-br-2xl flex rounded-lg  mx-auto  ${
            selectedConversation || selectedGroup ? "hidden" : "sm:flex"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`sm:flex mx-auto sm:w-full w-72 text-black   ${
            selectedConversation || selectedGroup ? "flex" : "hidden"
          }`}
        >
          {selectedFilter === "Contacts" ? (
            <MessageContainer />
          ) : (
            <GroupMessageContainer />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
