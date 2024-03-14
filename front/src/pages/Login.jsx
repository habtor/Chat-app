import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("ss");

  console.log(username);
  console.log(password);
  console.log(error);
  const handelUsernameOnChange = (e) => {
    setUsername(e);
  };
  const handelPasswordOnChange = (e) => {
    setPassword(e);
  };
  const handelOnSubmit = () => {
    fetch("http://127.0.0.1:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          console.log(data);
          setError("");
        }
      });
  };
  return (
    <div className="text-white w-6/12 m-auto my-12">
      <div>Welcome User to ChatAPP</div>
      <form className="flex flex-col">
        <label htmlFor="">Username</label>
        <input
          className="text-black"
          type="text"
          name="username"
          id=""
          placeholder="Enter username"
          value={username}
          onChange={(e) => handelUsernameOnChange(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          className="text-black"
          type="text"
          name="password"
          id=""
          placeholder="Enter password"
          value={password}
          onChange={(e) => handelPasswordOnChange(e.target.value)}
        />
      </form>
      <h1>{error}</h1>
      <button onClick={() => handelOnSubmit()}>Submit</button>
    </div>
  );
}

export default Login;
