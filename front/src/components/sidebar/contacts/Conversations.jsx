import useGetConversations from "../../../hooks/useGetConversations";
import Conversation from "./Conversation";
import useGetAllMessages from "../../../hooks/useGetAllMsgs";
import { useAuthContext } from "../../../context/AuthContext";
import AddUserForm from "./AddUserForm";
import useConversation from "../../../zustand/useConversation";

const Conversations = () => {
  const { authUser } = useAuthContext();
  const { loading } = useGetConversations();
  const { messages } = useGetAllMessages();
  const { contacts } = useConversation();

  return (
    <div className="py-2 pr-2 flex flex-col overflow-auto">
      <AddUserForm />
      {contacts.map((contact, idx) => (
        <Conversation
          key={contact._id}
          conversation={contact}
          lastIdx={idx === contacts.length - 1}
          messages={messages}
          currentUserID={authUser._id}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
