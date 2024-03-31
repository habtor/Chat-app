import useGroup from "../../../zustand/useGroup";
import { extractTime } from "../../../utils/extractTime";

const Conversation = ({ group, lastIdx }) => {
  const { selectedGroup, setSelectedGroup } = useGroup();
  const isSelected = selectedGroup?._id === group._id;


  //   const conversationMessages = messages.filter(
  //     (message) =>
  //       (message.senderId === conversation._id ||
  //         message.receiverId === conversation._id) &&
  //       (message.senderId === currentUserID ||
  //         message.receiverId === currentUserID)
  //   );

  //   const lastMessage =
  //     conversationMessages.length > 0
  //       ? conversationMessages[conversationMessages.length - 1]
  //       : null;

  //   const lastMessageTime = lastMessage?.createdAt;
  //   let formattedTime = "";

  //   if (lastMessageTime) {
  //     formattedTime = extractTime(lastMessageTime);
  //   }
  const formattedTime = extractTime(group.createdAt);

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 cursor-pointer   m-2 ml-0
				${isSelected ? "inShadoww" : ""}
			`}
        onClick={() => setSelectedGroup(group)}
      >
        <div className={`avatar`}>
          <div className="w-12 rounded-full">
            <img src={group.image} alt="group avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div>
              <p className="font-bold text-gray-700">{group.name}</p>

              {/* <p className="max-w-[10rem] max-h-4 overflow-hidden font-bold text-gray-500 text-xs">
                {lastMessage ? lastMessage.message : "Start a conversation"}
              </p> */}
            </div>
            <span className="text-sm flex items-center">{formattedTime}</span>
          </div>
        </div>
      </div>

      {!lastIdx && (
        <div className="divider bg-gray-200 my-0 py-0 h-[2px] rounded-full" />
      )}
    </>
  );
};
export default Conversation;
