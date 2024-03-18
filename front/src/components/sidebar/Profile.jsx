import { useAuthContext } from "../../context/AuthContext";
import { GoPencil } from "react-icons/go";

const Profile = () => {
  const { authUser } = useAuthContext();

  return (
    <div>
      <div className="text-white font-bold text-2xl flex items-center justify-between w-full mb-5">
        <div className="flex items-center">
          <div className="rounded-full h-20 w-20 bg-[url('https://www.spring.org.uk/images/wide-face.jpg')] bg-cover bg-center"></div>
          <div className="flex flex-col">
            <span className="text-lg ml-2 text-gray-600">
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