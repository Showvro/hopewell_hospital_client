import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDoctorData } from "../../../Redux/Slicer/Fetch";
import Navbar from "../../Shared/Navbar/Navbar";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

function Doctors() {
  const dispatch = useDispatch();
  const { DoctorData, dataLoading } = useSelector(
    (state) => state.HopeWellData
  );
  useEffect(() => {
    dispatch(fetchDoctorData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {dataLoading ? (
        <div className=" flex justify-center items-center my-24">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        <div className="doctor">
          <div>
            <h1>Our Doctors</h1>
            <div className="map">
              {DoctorData.map((ourDoctor) => (
                <Doctor doctor={ourDoctor} key={ourDoctor._id}></Doctor>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Doctors;
