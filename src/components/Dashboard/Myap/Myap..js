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
  if (dataLoading) {
    return (
      <div className=" flex justify-center items-center my-24">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }
  return (
    <div>
      <table className="min-w-full shadow-md rounded">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left font-bold">Name</th>
            <th className="p-4 text-left font-bold">Status</th>
            <th className="p-4 text-left font-bold">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {AppoinmentData ? (
            AppoinmentData?.map((ap) => (
              <tr key={ap._id}>
                <td className="p-4">{ap?.department}</td>
                <td className="p-4">{ap?.state}</td>
                <td className="p-4">{ap?.date}</td>
              </tr>
            ))
          ) : (
            <>
              <h1>Data is loading</h1>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Myap;
