import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { token } = useAuth();
  const onSubmit = (data) => {
    const options = {
      url: "https://fathomless-inlet-67666.herokuapp.com/makeadmin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
      body: {
        email: data.email,
      },
    };
    axios(options).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="bg-cyan-50 ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded shadow-xl shadow-cyan-200 overflow-hidden py-10 px-32 bg-white relative z-1">
          <div
            onClick={() => navigate("/")}
            className="absolute top-2 right-0 btn px-4"
          >
            <GrClose size="1.5em" className="text-cyan-500" />
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <h2 className="text-cyan-500 text-2xl font-bold text-center">
                Make Admin
              </h2>
              <p className="text-cyan-500 text-center">
                Admin Can Make New Admin
              </p>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="Your Email"
                  {...register("email")}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Make Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
