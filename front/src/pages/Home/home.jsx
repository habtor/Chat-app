import MessageContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  
  return (
    <div className="flex h-3/4 w-full max-w-[1200px] rounded-lg overflow-hidden text-black">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
