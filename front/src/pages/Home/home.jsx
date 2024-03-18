import MessageContainer from "../../components/messeges/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-full rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-black">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
