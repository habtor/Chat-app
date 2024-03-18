import MessageContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-full w-full max-w-[1200px] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-black">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
