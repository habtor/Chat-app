import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="inShadoww p-2 input-bordered outline-none rounded-full flex justify-between items-center gap-2"
    >
      <input
        type="text"
        placeholder="Search contacts..."
        className=" bg-inherit outline-none text-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <IoSearchSharp className="w-5 h-5 outline-none m-auto hover:text-blue-500" />
      </button>
    </form>
  );
};
export default SearchInput;
