import React from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const newDoctor = {
      name: data.name,
      img: data.img,
      sub: "MBBS",
      detail:
        "Medicine, Diabetics, Thyroid, Harmon Specialist, Department Of Endocrinology.",
      title: "Endocrinology",
      email: data.email,
    };
    axios.post("http://localhost:5000/addoctor", newDoctor).then((response) => {
      if (response.data.acknowledged) {
        navigate("/doctors");
      }
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
                Add a New Doctor
              </h2>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6">
                <input
                  className="input-field"
                  placeholder="Doctor Name"
                  {...register("name")}
                  required
                />
              </div>
              <div className="relative col-span-6">
                <input
                  className="input-field"
                  placeholder="Doctor Profile pic"
                  {...register("img")}
                  required
                />
              </div>
              <div className="relative col-span-6">
                <input
                  className="input-field"
                  placeholder="Doctor Email"
                  {...register("email")}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Add New Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
