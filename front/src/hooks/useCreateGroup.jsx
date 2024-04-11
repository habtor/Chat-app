import { useState } from "react";
import toast from "react-hot-toast";
import useGroup from "../zustand/useGroup";
const useCreateGroup = () => {
  const [loading, setLoading] = useState(false);
  const { groups, setGroups } = useGroup();

  const createGroup = async (name, description) => {
    const success = handleInputErrors({
      name,
      description,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/groups`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setGroups([...groups, data]);
      toast.success("Group created successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, createGroup };
};
export default useCreateGroup;

function handleInputErrors({ name, description }) {
  if (!name && !description) {
    toast.error("Please fill in the name and description of the group");
    return false;
  }
  if (!name) {
    toast.error("Please fill in the name of the group");
    return false;
  }
  if (!description) {
    toast.error("Please fill in the description of the group");
    return false;
  }
  return true;
}
