import Conversations from "./contacts/Conversations";
import LogoutButton from "./LogoutButton";
import Profile from "./profile/Profile";
import SearchInput from "./SearchInput";
import Groups from "./groups/Groups";
import useFilter from "../../zustand/chatFilter";
import AddGroupForm from "./groups/AddGroupForm";

const Sidebar = () => {
  const { selectedFilter, setSelectedFilter } = useFilter();

  const handleFilterClick = (e) => {
    setSelectedFilter(e.target.textContent);
  };
  return (
    <div className="flex flex-col mx-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 p-5 pr-0 w-72 rounded-2xl sm:rounded-tr-none sm:rounded-br-none pb-10">
      <Profile />
      <SearchInput />
      <div className="divider px-3 font-bold mt-10 pr-8">Chats</div>
      
      <div>
        <span
          className={`${
            selectedFilter === "Contacts" ? "border-blue-500 border-b-2" : ""
          } cursor-pointer mr-5 `}
          onClick={(e) => handleFilterClick(e)}
        >
          Contacts
        </span>
        <span
          className={`${
            selectedFilter === "Groups" ? "border-blue-500 border-b-2" : ""
          } cursor-pointer mr-5 `}
          onClick={(e) => handleFilterClick(e)}
        >
          Groups
        </span>
      </div>
      <AddGroupForm />
      {selectedFilter === "Contacts" ? <Conversations /> : <Groups />}
      
      <div className="flex justify-between absolute bottom-3 w-60">
        <LogoutButton />
      </div>
    </div>
  );
};
export default Sidebar;
