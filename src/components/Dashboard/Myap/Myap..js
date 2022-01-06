import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import { fetchApData } from "../../../Redux/Slicer/Fetch";

const Myap = () => {
  const dispath = useDispatch();
  const { AppoinmentData, dataLoading } = useSelector(
    (state) => state.HopeWellData
  );
  const { token } = useAuth();
  useEffect(() => {
    dispath(fetchApData(token));
  }, [token, dispath]);
  console.log(AppoinmentData);
  return (
    <div>
      <h1>This is My Appoinments</h1>
    </div>
  );
};

export default Myap;
