import GroupMessage from "./GroupMessage";
import useGetGroupMessages from "../../hooks/useGetGroupMessages";
import { useEffect, useRef } from "react";

const GroupMessages = () => {
  const { messages, loading } = useGetGroupMessages();
  const lastMessageRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <GroupMessage message={message} />
          </div>
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default GroupMessages;
