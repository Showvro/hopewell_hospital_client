import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { registerUser, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUrl = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const userdata = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      password: data.password,
    };
    registerUser(
      userdata.email,
      userdata.password,
      userdata.name,
      navigate,
      redirectUrl
    );
  };
  //Dynamic Title
  useEffect(() => {
    document.title = "Register | Hopewell Hospital";
  }, []);

  return (
    <div className="bg-cyan-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto shadow-xl shadow-cyan-200 overflow-hidden py-10 px-20 bg-white relative z-2">
          <div
            onClick={() => navigate("/")}
            className="absolute top-2 right-0 btn px-4"
          >
            <GrClose size="1.5em" />
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <h2 className="text-cyan-500 text-2xl font-bold text-center">
                Register
              </h2>
              <p className="text-cyan-500 text-center">Hey! Nice to see you!</p>
            </div>

            <div className="grid items-center grid-cols-6 gap-6 space-y-2">
              <div className="col-span-6 md:col-span-3">
                <input
                  id="fName"
                  name="fName"
                  type="name"
                  className="input-field"
                  placeholder="First Name"
                  {...register("firstName")}
                  required
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  id="lName"
                  name="lName"
                  type="name"
                  className="input-field"
                  placeholder="Last Name"
                  {...register("lastName")}
                  required
                />
              </div>

              <div className="col-span-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="Email Address"
                  {...register("email")}
                  required
                />
              </div>

              <div className="col-span-6">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  className="input-field"
                  placeholder="Your Password"
                  {...register("password")}
                  minLength={6}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
            {authError && (
              <p className="text-md text-red-700 font-bold text-center">
                {authError}
              </p>
            )}
            <p className="text-center">
              Already registered?
              <Link
                className="text-cyan-500 hover:text-cyan-400 no-underline ml-2"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
