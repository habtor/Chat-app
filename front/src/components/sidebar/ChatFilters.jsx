import { useState } from "react";

function ChatFilters() {
  const [activeFilter, setActiveFilter] = useState("Contacts");
  const handleFilterClick = (e) => {
    setActiveFilter(e.target.textContent);
  };
  return (
    <div className="flex flex-col mb-5">
      
      <ul className="flex text-sm ">
        <li
          className={`${
            activeFilter === "Contacts" ? "border-blue-500 border-b-2" : ""
          } cursor-pointer mr-5 `}
          onClick={(e) => handleFilterClick(e)}
        >
          Contacts
        </li>
        <li
          className={`${
            activeFilter === "Groups" ? "border-blue-500 border-b-2" : ""
          } cursor-pointer mr-5  `}
          onClick={(e) => handleFilterClick(e)}
        >
          Groups
        </li>
      </ul>
    </div>
  );
}

export default ChatFilters;
