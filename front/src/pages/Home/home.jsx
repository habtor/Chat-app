import MessageContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex sm:w-full h-full sm:h-3/4 w-[306px] max-w-[1200px]  p-1 border-[4px] border-gray-200 border-opacity-70 rounded-3xl  text-black">
      <div className="flex w-full max-w-[1200px] rounded-3xl  text-black">
        <div
          className={`sm:flex rounde-br-2xl flex rounded-lg  mx-auto  ${
            selectedConversation ? "hidden" : "sm:flex"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`sm:flex mx-auto sm:w-full w-72 text-black   ${
            selectedConversation ? "flex" : "hidden"
          }`}
        >
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};
export default Home;
