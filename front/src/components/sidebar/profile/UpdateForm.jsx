import { useAuthContext } from "../../../context/AuthContext";
import { PiUploadSimpleBold } from "react-icons/pi";
import useUpdateUser from "../../../hooks/useUpdateUser";
import { useState } from "react";
import toast from "react-hot-toast";

function UpdateForm() {
  const [userFullName, setUserFullName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilPic] = useState("");

  const { authUser } = useAuthContext();
  const { updateUser } = useUpdateUser();

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file.size > 70000)
      return toast.error("Image size must be less than 70kb");
    convertToBase64(file).then((res) => {
      setProfilPic(res);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(userFullName, username, profilePic);
  };
  return (
    <div className="flex flex-col items-center justify-center absolute left-0 top-0  w-full h-full ">
      <div className="w-full p-6 rounded-xl sm:rounded-tr-none sm:rounded-br-none shadow-md bg-gray-400 bg-clip-padding backdrop-filter text-slate-100 backdrop-blur-lg bg-opacity-80 h-full">
        <form>
          <div className="relative rounded-full w-[100px] border-2 border-white hover:border-2 hover:text-blue-800 m-auto hover:border-blue-800 transition-all duration-300">
            <label htmlFor="image-upload" className="cursor-pointer">
              <PiUploadSimpleBold className="h-9 w-9  absolute top-[45px] left-[30px] " />
              <img
                src={authUser.profilePic}
                alt="profile picture"
                className="w-24 h-24 m-auto rounded-full cursor-pointer border-gray-100"
              />
            </label>

            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleUploadImage(e)}
            />
          </div>
          <div>
            <label className="label mt-5">
              <span className="text-base text-slate-600">Full name</span>
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
            <label className="label mt-5 text-slate-600">
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

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
