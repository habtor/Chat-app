import { useState } from "react";
import useUpdateGroup from "../../../hooks/useUpdateGroup";
import { TfiPencil } from "react-icons/tfi";
import useGroup from "../../../zustand/useGroup";

function UpdateGroupForm() {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const [groupParticipants, setGroupParticipants] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { selectedGroup } = useGroup();
  console.log(selectedGroup);

  const { updateGroup } = useUpdateGroup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await updateGroup(
        groupName,
        groupImage,
        groupParticipants,
        groupDescription
      );
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
      <TfiPencil
        className="w-12 h-6 text-black cursor-pointer hover:text-green-700 transition-all duration-200 ease-in-out pr-1"
        onClick={() => handleShowUpdateForm()}
      />
      <div
        className={`flex flex-col items-center justify-center absolute left-0 top-0 z-10 w-full h-full ${
          showForm ? "flex" : "hidden"
        }`}
      >
        <div className="w-full p-6 rounded-xl sm:rounded-tl-none sm:rounded-bl-none shadow-md bg-gray-400 bg-clip-padding backdrop-filter text-slate-100 backdrop-blur-lg bg-opacity-80 h-full">
          <div className="text-black">
            <div
              className={`flex items-center rounded-full h-24 w-24 bg-cover bg-center m-auto`}
              style={{ backgroundImage: `url(${selectedGroup.image})` }}
            ></div>
            <p className="text-c text-center w-72 m-auto my-5">
              {selectedGroup.description}
            </p>
          </div>
          <div className="divider bg-slate-500 mb-3 py-0 h-[2px] rounded-full" />
          <h1 className="text-xl m-auto text-center text-slate-800">
            Update Group
          </h1>
          <form>
            <div className="">
              <label className="label mt-2">
                <span className="text-base text-black">Group name</span>
              </label>
              <input
                type="text"
                placeholder="Add group name"
                className="w-72 input input-bordered h-10 text-white"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>

            <div>
              <label className="label mt-2 text-slate-600">
                <span className="text-base text-black">Group image</span>
              </label>
              <input
                type="text"
                placeholder="Add group image URL"
                className="w-full input input-bordered h-10 text-white"
                value={groupImage}
                onChange={(e) => setGroupImage(e.target.value)}
              />
            </div>
            <div>
              <label className="label mt-2 text-slate-600">
                <span className="text-base text-black">Add a user</span>
              </label>
              <input
                type="text"
                placeholder="Add group member"
                className="w-full input input-bordered h-10 text-white"
                value={groupParticipants}
                onChange={(e) => setGroupParticipants(e.target.value)}
              />
            </div>
            <div>
              <label className="label mt-2 text-slate-600">
                <span className="text-base text-black">Group description</span>
              </label>
              <textarea
                placeholder="Add group description"
                className="textarea textarea-bordered w-full"
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-center mt-3">
              <button
                type="submit"
                className="btn btn-success rounded-full w-12 h-12 btn-sm m-2 mt-5 text-xs"
                onClick={handleSubmit}
              >
                Update
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

export default UpdateGroupForm;
