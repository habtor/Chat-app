import { useAuthContext } from "../../context/AuthContext";
import { GoPencil } from "react-icons/go";

const Profile = () => {
  const { authUser } = useAuthContext();
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <div>
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
        <div className="flex text-gray-600 hover:text-blue-500  cursor-pointer rounded-full ">
          <label htmlFor="file" className=" cursor-pointer">
            <GoPencil className="h-5 w-5 m-auto" />
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleUploadImage}
          />
        </div>
      </div>

      {/* <div className="ml-5">Chats</div> */}
      {/* <div className="h-px w-full bg-gray-900 m-auto mb-5"></div> */}
    </div>
  );
};

export default Profile;
