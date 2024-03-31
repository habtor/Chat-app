import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();

  const updateUser = async (firstname, lastname, username, profilePic) => {
    const success = handleInputErrors({
      firstname,
      lastname,
      username,
      profilePic,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/users/${authUser._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          profilePic,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success("User updated successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateUser };
};
export default useUpdateUser;

function handleInputErrors({ firstname, lastname, username, profilePic }) {
  if (!firstname && !lastname && !username && !profilePic) {
    toast.error(
      "Please fill in at least one field or provide a profile picture"
    );
    return false;
  }
  if ((firstname && !lastname) || (!firstname && lastname)) {
    toast.error("Please fill in first and last names");
    return false;
  }
  return true;
}
