import Messages from "../components/Messeges/Messages";
import SideBar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="bg-myGray  w-screen h-screen m-auto">
        <div className="bg-myGray p-2 flex justify-end max-w-screen-2xl m-auto">
          <SideBar />
          <Messages />
        </div>
      </div>
    </>
  );
};

export default Home;

