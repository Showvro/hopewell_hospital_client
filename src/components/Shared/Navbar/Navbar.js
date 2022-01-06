import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../../../assets/images/hopewell.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, LogOut } = useAuth();
  return (
    <>
      <nav className="bg-white shadow-lg sticky-top border-b-4 border-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0">
                <img className="h-24" src={Logo} alt="Brand Logo" />
              </NavLink>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className={(navLink) =>
                      navLink.isActive
                        ? "btn btn-nav-active"
                        : "btn btn-nav-hover"
                    }
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/doctors"
                    className={(navLink) =>
                      navLink.isActive
                        ? "btn btn-nav-active"
                        : "btn btn-nav-hover"
                    }
                  >
                    DOCTORS
                  </NavLink>
                  <NavLink
                    to="/appoinments"
                    className={(navLink) =>
                      navLink.isActive
                        ? "btn btn-nav-active"
                        : "btn btn-nav-hover"
                    }
                  >
                    APPOINTMENTS
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className={(navLink) =>
                      navLink.isActive
                        ? "btn btn-nav-active"
                        : "btn btn-nav-hover"
                    }
                  >
                    BLOG
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={(navLink) =>
                      navLink.isActive
                        ? "btn btn-nav-active"
                        : "btn btn-nav-hover"
                    }
                  >
                    CONTACT
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={(navLink) =>
                      navLink.isActive
                        ? "btn btn-nav-active"
                        : "btn btn-nav-hover"
                    }
                  >
                    ABOUT
                  </NavLink>
                  {user && (
                    <Link
                      to="/dashboard"
                      className="btn btn-nav-active btn-nav-toggler-active"
                    >
                      Dashboard
                    </Link>
                  )}
                  {user && <span>{user.displayName}</span>}
                  {user ? (
                    <button
                      onClick={LogOut}
                      className="btn btn-nav-active btn-nav-toggler-active"
                    >
                      LogOut
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="btn btn-nav-active btn-nav-toggler-active"
                    >
                      LOGIN
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-cyan-300 hover:text-cyan-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Main Menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className={(navLink) =>
                  navLink.isActive
                    ? "btn btn-nav-toggler-active"
                    : "btn btn-nav-toggler-hover"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/doctors"
                className={(navLink) =>
                  navLink.isActive
                    ? "btn btn-nav-toggler-active"
                    : "btn btn-nav-toggler-hover"
                }
              >
                DOCTORS
              </NavLink>
              <NavLink
                to="/appoinments"
                className={(navLink) =>
                  navLink.isActive
                    ? "btn btn-nav-toggler-active"
                    : "btn btn-nav-toggler-hover"
                }
              >
                APPOINTMENTS
              </NavLink>
              <NavLink
                to="/blogs"
                className={(navLink) =>
                  navLink.isActive
                    ? "btn btn-nav-toggler-active"
                    : "btn btn-nav-toggler-hover"
                }
              >
                BLOG
              </NavLink>
              <NavLink
                to="/contact"
                className={(navLink) =>
                  navLink.isActive
                    ? "btn btn-nav-toggler-active"
                    : "btn btn-nav-toggler-hover"
                }
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/about"
                className={(navLink) =>
                  navLink.isActive
                    ? "btn btn-nav-toggler-active"
                    : "btn btn-nav-toggler-hover"
                }
              >
                ABOUT
              </NavLink>
              {user && (
                <Link
                  to="/dashboard"
                  className="btn btn-nav-active btn-nav-toggler-active"
                >
                  Dashboard
                </Link>
              )}
              {user ? (
                <button
                  onClick={LogOut}
                  className="btn btn-nav-active btn-nav-toggler-active"
                >
                  LogOut
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-nav-active btn-nav-toggler-active"
                >
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
