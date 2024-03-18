import { useAuthContext } from "../../context/AuthContext";
import { GoPencil } from "react-icons/go";

const Profile = () => {
  const { authUser } = useAuthContext();

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
        <div className="flex text-gray-600 inShadoww rounded-full h-8 w-8">
          <GoPencil className="h-5 w-5 m-auto cursor-pointer" />
        </div>
      </div>

      {/* <div className="ml-5">Chats</div> */}
      {/* <div className="h-px w-full bg-gray-900 m-auto mb-5"></div> */}
    </div>
  );
};

export default Profile;
