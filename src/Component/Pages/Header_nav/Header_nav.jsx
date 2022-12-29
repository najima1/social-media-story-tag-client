import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Auth/Auth_provider";
import "./header_nav.css";

const Header_nav = () => {
  const [showNav, setShowNav] = useState(true);
  const { user, log_out_user } = useAuthContext();
  const navigate = useNavigate();

  const userLogOutHandler = () => {
    log_out_user()
      .then(() => {
        navigate("/home");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div>
      <div className="px-1 fixed w-full z-20">
        <nav className=" relative bg-white">
          <div className="container py-2 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-5">
                <Link
                  className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform  lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  to="/home"
                >
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </h1>
                </Link>
                <strong>
                  <span className="text-teal-400">Story</span> tag
                </strong>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setShowNav(!showNav)}
                  type="button"
                  className={
                    "text-gray-500 dark:text-gray-900 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  }
                >
                  {showNav ? (
                    <svg
                      x-show="!isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      x-show="isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/*
        <!-- Mobile Menu open: "block", Menu closed: "hidden"
        x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" hidden md:block  --> */}
            <div
              className={
                showNav
                  ? "hidden md:block "
                  : "" +
                    "customNav absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-whitemd:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center delay-1000 bg-white"
              }
            >
              <div className="flex flex-col md:flex-row md:mx-6">
                {/* news feed */}
                <Link
                  className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-2 md:my-0 hover:bg-gray-200 p-2 flex items-center gap-x-3"
                  to="/newsfeed"
                  title="Newsfeed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  <strong className="md:hidden">News feed </strong>
                </Link>
                {/* message */}
                <Link
                  className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-2 md:my-0 hover:bg-gray-200 p-2 rounded-md flex items-center gap-x-3"
                  to="/message"
                  title="Message"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  <strong className="md:hidden">Message</strong>
                </Link>
                {/* about */}
                <Link
                  className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-2 md:my-0 hover:bg-gray-200 p-2 rounded-md flex items-center gap-x-3"
                  to="/about"
                  title="About"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <strong className="md:hidden">About</strong>
                </Link>
                {/* login & logout */}
                <div className="flex items-center">
                  {user?.uid ? (
                    <button
                      onClick={() => userLogOutHandler()}
                      className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-2 md:my-0 hover:bg-gray-200 p-2 rounded-md flex items-center gap-x-3"
                      title="Log-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      <strong className="md:hidden">Log-out</strong>
                    </button>
                  ) : (
                    <Link
                      className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-2 md:my-0 hover:bg-gray-200 p-2 rounded-md flex items-center gap-x-3"
                      to="/login"
                      title="Login"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      <strong className="md:hidden">Login</strong>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header_nav;
