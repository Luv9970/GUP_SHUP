import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(signupData)

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-2 bg-base-200 p-10 rounded-lg">
        <h3>Please Signup..!!</h3>

        {/* /FULL NAME */}
        <div>
          <label className="input validator">
            <CiUser className="text-2xl" />
            <input
              type="text"
              required
              placeholder="Full Name"
              name="fullName"
              onChange={handleInputChange}
            />
          </label>
        </div>

        {/* USERNAME */}
        <div className="mt-3">
          <label className="input validator">
            <CiUser className="text-2xl" />
            <input
              type="text"
              required
              placeholder="Username"
              name="userName"
              onChange={handleInputChange}
            />
          </label>
        </div>

        {/* PASSWORD */}
        <div className="mt-3">
          <label className="input validator">
            <IoKeyOutline className="text-2xl" />
            <input
              type="password"
              required
              placeholder="Password"
              minLength="3"
              name="password"
              onChange={handleInputChange}
            />
          </label>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mt-3">
          <label className="input validator">
            <IoKeyOutline className="text-2xl" />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              minLength="3"
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <button className="btn btn-primary mt-3">Signup</button>
        </div>
        <p className="text-[0.9vw] mt-2">
          Already have an account?
          <Link to="/login" className="text-blue-500">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
