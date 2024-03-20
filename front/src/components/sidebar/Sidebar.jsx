import ChatFilters from "./ChatFilters";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import Profile from "./profile/Profile";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className=" border-slate-500 p-4 flex flex-col min-w-72 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 z-10">
      <Profile />
      <SearchInput />
      <div className="divider px-3 font-bold mt-10">Chats</div>
      <ChatFilters />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
