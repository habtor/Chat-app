import { useState } from "react";
import useAddUser from "../../../zustand/useShowAddUser";
import useAddContact from "../../../hooks/useAddContact";

function AddUserForm() {
  const { showAddUser, setShowAddUser } = useAddUser();
  const { addUser } = useAddContact();
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await addUser(username);
      if (success) {
        setShowAddUser(!showAddUser);
        setUsername("");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
    setShowAddUser(!showAddUser);
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center absolute left-0 top-0 z-10 w-full h-full ${
          showAddUser ? "flex" : "hidden"
        }`}
      >
        <div className="w-full p-6 rounded-xl sm:rounded-tr-none sm:rounded-br-none shadow-md bg-gray-400 bg-clip-padding backdrop-filter text-slate-100 backdrop-blur-lg bg-opacity-80 h-full">
          <h1 className="text-xl m-auto text-center">Add Contact</h1>
          <form>
            <div>
              <label className="label mt-5">
                <span className="text-base text-black">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username to add"
                className="w-full input input-bordered h-10 text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="btn btn-success rounded-full w-12 h-12 btn-sm m-2 mt-5 text-xs"
                onClick={handleSubmit}
              >
                Create
              </button>
              <button className="btn btn-error rounded-full w-12 h-12 btn-sm m-2 mt-5 text-xs">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUserForm;
