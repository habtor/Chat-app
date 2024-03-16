import useGetConversations from "../hooks/useGetConversations";
import Contact from "./Contact";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

const SideBar = () => {
  const { loading, conversations } = useGetConversations();
  // console.log("CONVERSATIONS:", conversations);
  return (
    <>
      <div className="m-5 bg-myGray outShadowSidebar rounded-2xl py-5 ">
        <Profile />
        <div className="h-96 overflow-y-auto">
          {conversations.map((conversation, idx) => (
            <Contact
              key={conversation._id}
              conversation={conversation}
              lastIdx={idx === conversations.length - 1} // for the line under last contact
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
