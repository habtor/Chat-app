import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const updateUser = async (fullname, username) => {
    const success = handleInputErrors({
      fullname,
      username,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/users/${authUser._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateUser };
};
export default useUpdateUser;

function handleInputErrors({ fullname, username }) {
  if (!fullname && !username) {
    toast.error("Please fill in at least one field");
    return false;
  }
  return true;
}
