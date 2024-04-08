import useGetConversations from "../../../hooks/useGetConversations";
import Conversation from "./Conversation";
import useGetAllMessages from "../../../hooks/useGetAllMsgs";
import { useAuthContext } from "../../../context/AuthContext";
import AddUserForm from "./AddUserForm";

const Conversations = () => {
  const { authUser } = useAuthContext();
  const { loading, conversations } = useGetConversations();
  const { messages } = useGetAllMessages();
  return (
    <div className="py-2 pr-2 flex flex-col overflow-auto">
      <AddUserForm />
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
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
