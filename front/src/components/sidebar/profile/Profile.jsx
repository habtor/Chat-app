import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { GoPencil } from "react-icons/go";
import UpdateForm from "./UpdateForm";

const Profile = () => {
  const { authUser } = useAuthContext();
  const [showForm, setShowForm] = useState(false);

  const handleShowUpdateForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="z-10">
      <div className="text-white font-bold text-2xl flex items-center justify-between w-full mb-5">
        <div className="flex items-center cursor-default">
          <div className="flex items-center rounded-full h-16 w-16 bg-cover bg-center">
            {" "}
            <img className="w-16" src={authUser.profilePic} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg ml-2 text-gray-600 font-medium">
              {authUser.fullname}
            </span>
            <span className="text-xs text-gray-400 ml-2">
              {authUser.username}
            </span>
          </div>
        </div>
        <div className="flex text-gray-600  rounded-full ">
          <GoPencil
            className="h-5 w-5 cursor-pointer hover:text-blue-500"
            onClick={() => handleShowUpdateForm()}
          />

          <div className={`${showForm ? "block" : "hidden"} `}>
            <UpdateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;