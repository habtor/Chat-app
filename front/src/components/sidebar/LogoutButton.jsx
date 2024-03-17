import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <button
          className=" text-black cursor-pointer bg-slate-400"
          onClick={logout}
        >
          {"Logout"}
        </button>
      ) : (
        <span className="loading loading-spinner">ddd</span>
      )}
    </div>
  );
};
export default LogoutButton;
