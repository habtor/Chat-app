import useCreateGroup from "../../../hooks/useCreateGroup";
import { RiChatNewFill } from "react-icons/ri";
import { useState } from "react";

function AddGroupForm() {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const { createGroup } = useCreateGroup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await createGroup(groupName, groupDescription);
      if (success) {
        setShowForm(!showForm);
      }
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  const handleShowUpdateForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <RiChatNewFill
        className="w-6 h-6 text-black cursor-pointer hover:text-green-700 transition-all duration-200 ease-in-out"
        onClick={() => handleShowUpdateForm()}
      />
      <div
        className={`flex flex-col items-center justify-center absolute left-0 top-0 z-10 w-full h-full ${
          showForm ? "flex" : "hidden"
        }`}
      >
        <div className="w-full p-6 rounded-xl sm:rounded-tr-none sm:rounded-br-none shadow-md bg-gray-400 bg-clip-padding backdrop-filter text-slate-100 backdrop-blur-lg bg-opacity-80 h-full">
          <h1 className="text-xl m-auto text-center">Create Group</h1>
          <form>
            <div>
              <label className="label mt-5">
                <span className="text-base text-black">Group name</span>
              </label>
              <input
                type="text"
                placeholder="Add group name"
                className="w-full input input-bordered h-10 text-white"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div>
              <label className="label mt-5 text-slate-600">
                <span className="text-base text-black">Group description</span>
              </label>
              <textarea
                placeholder="Add group description"
                className="textarea textarea-bordered w-full"
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
              ></textarea>
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

export default AddGroupForm;
