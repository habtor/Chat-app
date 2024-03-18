import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import useGetAllMessages from "../../hooks/useGetAllMsgs";
import { useAuthContext } from "../../context/AuthContext";

const Conversations = () => {
  const { authUser } = useAuthContext();
  const { loading, conversations } = useGetConversations();
  const { messages } = useGetAllMessages();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
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
