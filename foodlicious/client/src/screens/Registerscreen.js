import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success';
import "../index.css";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (success) {
      setname("");
      setemail("");
      setpassword("");
      setcpassword("");
    }
  }, [success]);
  
  function register(){

      if(password!=cpassword)
      {
          alert("passwords not matched")
      }
      else{
          const user={
              name,
              email,
              password
          }
          console.log(user);
          dispatch(registerUser(user))
      }

  }

  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    return emailRegex.test(email);
  }

  function register() {
    setEmailError("");
    setPasswordError("");
    setCPasswordError("");

    if (password !== cpassword) {
      setCPasswordError("Passwords do not match");
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email. Please use a northeastern.edu email address.");
    } else if (!isValidPassword(password)) {
      setPasswordError("Invalid password. Password must have at least 8 characters, one uppercase, one lowercase, one alphanumeric character, and one number.");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function toggleCPasswordVisibility() {
    setShowCPassword(!showCPassword);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-yellow-100 register-bg">
  <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md ">
    <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Register</h2>

    {loading && (<Loading />)}
    {success && (<Success success="User Registered Successfully" />)}
    {error && (<Error error="Email already registered" />)}

    <div className="mb-4">
      <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
      <input
        required
        type="text"
        placeholder="name"
        className="w-full px-3 py-2 bg-green-50 text-green-700 border border-green-300 rounded focus:outline-none focus:border-green-500"
        value={name}
        onChange={(e) => { setname(e.target.value) }}
      />
    </div>
    <div className="mb-4">
      <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input
        required
        type="text"
        placeholder="email"
        className="w-full px-3 py-2 bg-green-50 text-green-700 border border-green-300 rounded focus:outline-none focus:border-green-500"
        value={email}
        onChange={(e) => { setemail(e.target.value) }}
      />
      {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
    </div>

    <div className="mb-4 relative">
      <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="password"
        className="w-full px-3 py-2 bg-green-50 text-green-700 border border-green-300 rounded focus:outline-none focus:border-green-500"
        value={password}
        required
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        onClick={togglePasswordVisibility}
        className="absolute top-0 right-0 mt-5 mr-3 text-green-700"
      >
        {showPassword ? "🙈" : "👁️"}
      </button>
      {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}
    </div>

    <div className="mb-4 relative">
      <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="confirm-password">
        Confirm Password
      </label>
      <input
        type={showCPassword ? "text" : "password"}
        placeholder="confirm password"
        className="w-full px-3 py-2 bg-green-50 text-green-700 border border-green-300 rounded focus:outline-none focus:border-green-500"
        value={cpassword}
        required
        onChange={(e) => {
          setcpassword(e.target.value);
        }}
      />
      <button
        onClick={toggleCPasswordVisibility}
        className="absolute top-0 right-0 mt-5 mr-3 text-green-700"
      >
        {showCPassword ? "🙈" : "👁️"}
      </button>
      {cpasswordError && <p className="text-red-600 text-sm mt-1">{cpasswordError}</p>}
    </div>

    <button
      onClick={register}
      className="w-full py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
    >
      REGISTER
    </button>
    <div className="mt-4 text-center">
      <a
        href="/login"
        className="text-green-700 hover:text-green-600 font-semibold"
      >
        Click Here To Login
      </a>
    </div>
  </div>
</div>

  );
}
