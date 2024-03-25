import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useGroup from "../zustand/useGroup";

const useGetGroupMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedGroup } = useGroup();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/groups/${selectedGroup._id}/messages`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedGroup?._id) getMessages();
  }, [selectedGroup?._id, setMessages]);

  return { messages, loading };
};

export default useGetGroupMessages;
