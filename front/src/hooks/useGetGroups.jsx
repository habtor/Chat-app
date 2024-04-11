import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useGroup from "../zustand/useGroup";

const useGetGroups = () => {
  const {groups, setGroups} = useGroup();
  const [loading, setLoading] = useState(false);
  // const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/groups");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setGroups(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getGroups();
  }, [setGroups]);

  return { groups, loading };
};
export default useGetGroups;
