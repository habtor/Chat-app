import ChatFilters from "./ChatFilters";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import Profile from "./profile/Profile";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col mx-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 p-5 pr-0 w-72 rounded-2xl sm:rounded-tr-none sm:rounded-br-none">
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
