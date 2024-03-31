import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { TfiPencil } from "react-icons/tfi";
import UpdateForm from "./UpdateForm";

const Profile = () => {
  const { authUser } = useAuthContext();
  const [showForm, setShowForm] = useState(false);
 
  const handleShowUpdateForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="z-10 pr-4">
      <div className="text-white font-bold text-2xl flex items-center justify-between w-full mb-5">
        <div className="flex items-center cursor-default">
          <div
            className={`flex items-center rounded-full h-20 w-20 bg-cover bg-center `}
            style={{ backgroundImage: `url(${authUser.profilePic})` }}
          >
            {" "}
          </div>
          <div className="flex flex-col">
            <span className="text-lg ml-2 text-gray-600 font-medium">
              {authUser.firstname} {authUser.lastname}
            </span>
            <span className="text-xs text-gray-400 ml-2">
              {authUser.username}
            </span>
          </div>
        </div>
        <div className="flex text-gray-600  rounded-full ">
          <TfiPencil
            className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-all"
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
