import { useState } from "react";
import useGroup from "../zustand/useGroup";
import toast from "react-hot-toast";

function useUpdateGroup() {
  const { selectedGroup } = useGroup();
  const [loading, setLoading] = useState(false);

  const updateGroup = async (name, image, username, description) => {
    const success = handleInputErrors({
      name,
      description,
      username,
      image,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(`api/groups/${selectedGroup._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
          username,
          description,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success("Group updated successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateGroup };
}

export default useUpdateGroup;

function handleInputErrors({ name, description, username, image }) {
  if (!name && !description && !username && !image) {
    toast.error("Please fill in at least one field");
    return false;
  }

  return true;
}
