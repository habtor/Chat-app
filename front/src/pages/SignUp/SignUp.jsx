import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-slate-800">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">
                First Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full input input-bordered  h-10"
              value={inputs.firstname}
              onChange={(e) =>
                setInputs({ ...inputs, firstname: e.target.value })
              }
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">
                Last Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full input input-bordered  h-10"
              value={inputs.lastname}
              onChange={(e) =>
                setInputs({ ...inputs, lastname: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base text-slate-800 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-slate-800 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-slate-800 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <Link
            to={"/login"}
            className="text-sm hover:underline text-slate-800 hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
