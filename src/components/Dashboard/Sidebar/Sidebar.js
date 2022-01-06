import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdPayment,
  MdShoppingCart,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

import AdminNavbar from "./AdminNavbar";
import useAuth from "../../../hooks/useAuth";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const { admin } = useAuth();
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <h1 className="font-bold text-lg text-blue-400">Hope Well </h1>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            {admin ? (
              <ul className="flex-col min-w-full flex list-none">
                {" "}
                <li className="rounded-lg mb-2 ">
                  <NavLink
                    to="/dashboard/mycarts"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdShoppingCart />
                    Manage AP
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2 text-gray-700">
                  <NavLink
                    to="/dashboard/makeadmin"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdOutlineAdminPanelSettings />
                    Make Admin
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2 text-gray-700">
                  <NavLink
                    to="/dashboard/adddoctor"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdOutlineAdminPanelSettings />
                    Add Doctor
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2 text-gray-700">
                  <NavLink
                    to="/dashboard/adservices"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdOutlineAdminPanelSettings />
                    Add New Blog
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="flex-col min-w-full flex list-none">
                <li className="rounded-lg mb-4">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdOutlineDashboardCustomize />
                    Dashboard
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2">
                  <NavLink
                    to="/dashboard/myap"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdPayment />
                    My Appoinments
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2">
                  <NavLink
                    to="/dashboard/payments"
                    className={({ isActive }) =>
                      !isActive
                        ? "flex items-center gap-4 text-md text-gray-700 font-light px-4 py-3 rounded-lg"
                        : "flex items-center gap-4 text-md text-blue-400 font-light px-4 py-3 rounded-lg"
                    }
                  >
                    <MdPayment />
                    Payments
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
