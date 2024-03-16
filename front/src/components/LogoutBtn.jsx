import useLogout from "../hooks/useLogout";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <div>{!loading ? <button onClick={logout}>LogoutBtn</button> : ""}</div>
  );
};

export default LogoutBtn;
