import MessageContainer from "../../components/messeges/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-full outShadow rounded-2xl">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
