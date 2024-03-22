import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-3">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-black cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
