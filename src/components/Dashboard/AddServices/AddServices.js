import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const date = new Date().toDateString();
    const newblog = {
      description: data.description,
      title: data.title,
      createdAt: date,
      authorName: user.displayName,
      authorAvatar:
        "https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg",
      cover: data.cover,
      category: "Health",
      id: Math.ceil(Math.random() * 1000),
    };
    axios
      .post("https://fathomless-inlet-67666.herokuapp.com/addblog", newblog)
      .then((response) => {
        if (response.data.acknowledged) {
          navigate("/blogs");
        }
      });
  };
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
                Add a New Blog
              </h2>
              <p className="text-cyan-500 text-center">
                Blogs are show on Blogs section
              </p>
            </div>

            <div className="grid items-center grid-cols-12 gap-6 space-y-2">
              <div className="col-span-12">
                <input
                  id="fName"
                  name="fName"
                  type="name"
                  className="input-field"
                  placeholder="Blog Title"
                  {...register("title")}
                  required
                />
              </div>

              <div className="col-span-12">
                <input
                  name="cover"
                  className="input-field"
                  placeholder="Blog Cover Url"
                  {...register("cover")}
                  required
                />
              </div>

              <div className="col-span-12">
                <textarea
                  className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  rows="3"
                  placeholder="Blog Context"
                  {...register("description")}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Add New Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
