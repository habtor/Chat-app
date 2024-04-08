import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useAddContact = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const addUser = async (username) => {
    const success = handleInputErrors({
      username,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/users/${authUser._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success("User added to your contacts successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, addUser };
};
export default useAddContact;

function handleInputErrors({ username }) {
  if (!username) {
    toast.error("Please fill in the username");
    return false;
  }

  return true;
}
