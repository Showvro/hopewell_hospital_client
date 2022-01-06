import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBlogsData, fetchDoctorData } from "../../../Redux/Slicer/Fetch";
import Navbar from "../../Shared/Navbar/Navbar";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

function Doctors() {
  const dispatch = useDispatch();
  const {DoctorData} = useSelector(state => state.HopeWellData)
  useEffect(() => {
    dispatch(fetchDoctorData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default Doctors;
