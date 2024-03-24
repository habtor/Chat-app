import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useGroup from "../zustand/useGroup";

const useGetOneGroup = () => {
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState(null);
  const { setselectedGroup } = useGroup();

  useEffect(() => {
    const getOneGroup = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/groups/${setselectedGroup}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        console.log(data);
        setGroup(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (setselectedGroup?._id) getOneGroup();
  }, [setselectedGroup?._id, setGroup, setselectedGroup]);

  return { group, loading };
};
export default useGetOneGroup;
