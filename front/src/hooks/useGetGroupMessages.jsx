import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useGroupMessagesStore from "../zustand/useGroupMessagesStore";
import useGroup from "../zustand/useGroup";

const useGetGroupMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedGroup } = useGroup();
  const { messages, addMessage } = useGroupMessagesStore();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const fetchedMessages = await fetch(
          `/api/groups/${selectedGroup._id}/messages`
        );
        const data = await fetchedMessages.json();
        if (data.error) throw new Error(data.error);

        useGroupMessagesStore.setMessages(selectedGroup._id, data.messages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedGroup?._id) getMessages();
  }, [selectedGroup?._id, addMessage]);

  return { messages, loading };
};

export default useGetGroupMessages;
