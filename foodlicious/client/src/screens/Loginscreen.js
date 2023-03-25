import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import "../index.css";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="login ">
      <div className="min-h-screen flex items-center justify-center bg-green-100 login-bg">
        <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div className="mb-4">
            <label
              className="block text-green-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              type="text"
              placeholder="email"
              className="w-full px-3 py-2 bg-green-50 text-green-700 border border-green-300 rounded focus:outline-none focus:border-green-500"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full px-3 py-2 bg-green-50 text-green-700 border border-green-300 rounded focus:outline-none focus:border-green-500"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <button
            onClick={login}
            className="w-full py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            LOGIN
          </button>
          <div className="mt-4 text-center">
            <a
              href="/register"
              className="text-green-700 hover:text-green-600 font-semibold"
            >
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
