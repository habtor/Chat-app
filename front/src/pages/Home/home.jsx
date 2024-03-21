import MessageContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex h-3/4 w-full max-w-[1200px] rounded-3xl  text-black">
      <div
        className={`sm:flex rounde-br-2xl flex rounded-lg  mx-auto  ${
          selectedConversation ? "hidden" : "sm:flex"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`sm:flex  w-full overflow-hidden text-black   ${
          selectedConversation ? "flex" : "hidden"
        }`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
