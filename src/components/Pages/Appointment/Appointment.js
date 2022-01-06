import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Navbar from "../../Shared/Navbar/Navbar";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import Footer from "../../Shared/Footer/Footer";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  //
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:flex">
          <div className="xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0">
            <form id="contact" className="bg-white py-4 px-8">
              <h1 className="text-4xl text-gray-800 font-semibold mb-6">
                Enter Your Details
              </h1>
              <div className="'block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label
                      htmlFor="full_name"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      id="full_name"
                      name="full_name"
                      type="text"
                      className="focus:outline-none focus:border focus:border-cyan-500 font-normal w-72 h-10 flex items-center pl-3 text-sm border-gray-300 border"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="focus:outline-none focus:border focus:border-cyan-500 font-normal w-72 h-10 flex items-center pl-3 text-sm border-gray-300 border"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-full">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Subject
                    </label>
                    <input
                      required
                      id="subject"
                      name="subject"
                      type="tel"
                      className="focus:outline-none focus:border focus:border-cyan-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 border"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <label
                  htmlFor="country"
                  className="text-sm font-semibold text-gray-800 mb-2"
                >
                  Select a Department
                </label>
                <select
                  id="country"
                  required
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 mb-4 border border-gray-300 bg-white focus:outline-none focus:ring-indigo-500 focus:border-cyan-500 sm:text-sm"
                >
                  <option>Gynaecology</option>
                  <option>Blood Bank</option>
                  <option>Oncology</option>
                  <option>Ophthalmology</option>
                  <option>Physio Therapy</option>
                </select>
              </div>

              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    required
                    className="border-gray-300 border mb-4 py-2 text-sm outline-none resize-none px-3 focus:border focus:border-cyan-500"
                    rows={8}
                    id="message"
                    defaultValue={"I need an appointment in an emergency."}
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-cyan-500 transition duration-150 ease-in-out hover:bg-cyan-600 text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="xl:w-2/5 lg:w-2/5 text-gray-800 py-16">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-4xl text-3xl pb-4 text-gray-800 font-semibold">
                Book an appointment
              </h1>
              <p className="text-lg text-gray-800 pb-4 leading-relaxed font-normal text-justify lg:pr-4">
                Book an appointment by give details here. And this will
                registered in our database.
              </p>
              <hr className="my-4" />
              <div className="flex items-center bg-gray-100">
                <div className="text-white bg-cyan-500 p-3">
                  <MdOutlineWifiCalling3 />
                </div>
                <p className="pl-4 text-gray-800 text-base">
                  Phone:
                  <span className="text-cyan-500 cursor-pointer ml-2">
                    +1 (321) 321 321
                  </span>
                </p>
              </div>
              <div className="flex items-center bg-gray-100 mt-2">
                <div className="text-white bg-cyan-500 p-3">
                  <MdOutlineEmail />
                </div>
                <p className="pl-4 text-gray-800 text-base">
                  Mail:
                  <span className="text-cyan-500 cursor-pointer ml-2">
                    info@mail.com
                  </span>
                </p>
              </div>
              <div className="flex items-center bg-gray-100 mt-2">
                <div className="text-white bg-cyan-500 p-3">
                  <BsGlobe2 />
                </div>
                <p className="pl-4 text-gray-800 text-base">
                  Form:
                  <span className="text-cyan-500 cursor-pointer ml-2">
                    Fill out this form
                  </span>
                </p>
              </div>
              <hr className="my-4" />
              <p className="text-lg text-gray-800 tracking-wide my-8">
                545, Street 11, Block F <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
