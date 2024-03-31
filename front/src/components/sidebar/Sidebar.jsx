import Conversations from "./contacts/Conversations";
import LogoutButton from "./LogoutButton";
import Profile from "./profile/Profile";
import SearchInput from "./SearchInput";
import Groups from "./groups/Groups";
import useFilter from "../../zustand/chatFilter";
import { RiChatNewFill } from "react-icons/ri";
import useAddGroup from "../../zustand/useShowAddGroup";
import { IoIosContact } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";

const Sidebar = () => {
  const { setShowAddGroup } = useAddGroup();
  const { selectedFilter, setSelectedFilter } = useFilter();
  
  const handleContactsClick = () => {
    setSelectedFilter("Contacts");
  };
  const handleGroupsClick = () => {
    setSelectedFilter("Groups");
  };
  return (
    <div className="flex flex-col mx-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 p-5 pr-0 w-72 rounded-2xl  sm:rounded-tr-none sm:rounded-br-none pb-10">
      <Profile />
      <SearchInput />
      <div className="divider px-3 font-bold mt-10 pr-8">Chats</div>

      <div className="mx-auto flex justify-around w-60 mr-6 text-slate-700 bg-slate-500 bg-opacity-10 rounded-2xl p-1">
        <span
          className={`tooltip rounded-box hover:text-blue-400 transition-all duration-300 cursor-pointer hover:bg-base-200 hover:bg-opacity-10  ${
            selectedFilter === "Contacts"
              ? "border-blue-500 border-2"
              : "border-2 border-gray-400 border-opacity-0"
          }
            `}
          data-tip="Contacts"
          onClick={() => handleContactsClick()}
        >
          <IoIosContact className="h-7 w-7 mx-auto " />
        </span>
        <span
          className={`tooltip rounded-box hover:text-blue-400 transition-all duration-300 cursor-pointer hover:bg-base-200 hover:bg-opacity-10  ${
            selectedFilter === "Groups"
              ? "border-blue-500 border-2"
              : "border-2 border-gray-400 border-opacity-0"
          }`}
          data-tip="Groups"
        >
          <IoIosContacts
            className="h-7 w-7 mx-auto"
            onClick={() => handleGroupsClick()}
          />
        </span>
      </div>

      {selectedFilter === "Contacts" ? <Conversations /> : <Groups />}

      <div className="flex justify-between absolute bottom-3 w-60">
        <LogoutButton />
        {selectedFilter === "Groups" ? (
          <RiChatNewFill
            className="w-6 h-6 text-black cursor-pointer hover:text-green-700 transition-all duration-200 ease-in-out"
            onClick={() => setShowAddGroup(true)}
          />
        ) : (
          <RiChatNewFill className="w-6 h-6 text-black cursor-pointer hover:text-green-700 transition-all duration-200 ease-in-out" />
        )}
      </div>
    </div>
  );
};
export default Sidebar;
