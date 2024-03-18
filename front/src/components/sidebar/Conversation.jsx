import useConversation from "../../zustand/useConversation";

const Conversation = ({
  conversation,
  lastIdx,
  emoji,
  currentUserID,
  messages,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  // Filter messages belonging to the current conversation and the current user
  const conversationMessages = messages.filter(
    (message) =>
      (message.senderId === conversation._id ||
        message.receiverId === conversation._id) &&
      (message.senderId === currentUserID ||
        message.receiverId === currentUserID)
  );

  // Get the last message from the conversation, if available
  const lastMessage =
    conversationMessages.length > 0
      ? conversationMessages[conversationMessages.length - 1]
      : null;

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer   m-2
				${isSelected ? "inShadoww" : "outShadow"}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div>
              <p className="font-bold text-gray-700">{conversation.fullname}</p>

              <p className="font-bold text-gray-500 text-xs">
                {lastMessage ? lastMessage.message : "Start a conversation"}
              </p>
            </div>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
