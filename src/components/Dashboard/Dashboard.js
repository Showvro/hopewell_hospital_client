import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Outlet/>
      </div>
    </>
  );
};

export default Dashboard;
