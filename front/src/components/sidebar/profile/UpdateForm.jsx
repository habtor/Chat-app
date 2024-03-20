import { useAuthContext } from "../../../context/AuthContext";
import { MdChangeCircle } from "react-icons/md";
import useUpdateUser from "../../../hooks/useUpdateUser";
import { useState } from "react";

function UpdateForm() {
  const [userFullName, setUserFullName] = useState("");
  const [username, setUsername] = useState("");
  const { authUser } = useAuthContext();
  const { updateUser } = useUpdateUser();

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(userFullName, username);
  };
  return (
    <div className="flex flex-col items-center justify-center absolute left-0 top-0  w-full h-full ">
      <div className="w-full p-6 rounded-lg rounded-tr-none rounded-br-none shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 h-full">
        <div className=" relative w-full">
          <img
            src={authUser.profilePic}
            alt="profile picture"
            className="w-24 h-24 m-auto"
          />
          <label
            htmlFor="file"
            className=" cursor-pointer hover:text-blue-500"
            onClick={(e) => handleUploadImage(e)}
          >
            <MdChangeCircle className="h-8 w-8 text-black absolute hover:text-blue-500 transition-colors cursor-pointer top-20 left-[102px]" />
          </label>

          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleUploadImage}
          />
        </div>

        <form>
          <div>
            <label className="label mt-5">
              <span className="text-base">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Update full name"
              className="w-full input input-bordered h-10 text-white"
              value={userFullName}
              onChange={(e) => setUserFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="label mt-5">
              <span className="text-base">User name</span>
            </label>
            <input
              type="text"
              placeholder="Update user name"
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
              Update
            </button>
            <button className="btn btn-error rounded-full w-12 h-12 btn-sm m-2 mt-5 text-xs">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
