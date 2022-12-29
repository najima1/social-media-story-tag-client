import React from "react";

const UserTemplete = ({ users }) => {
  return (
    <div className="">
      <ul className="mt-5">
        <li className="flex items-center gap-x-4 p-1 px-5 rounded-md hover:bg-gray-200 transition-opacity">
          <div className="border-2 border-teal-400 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <strong>
            <h2>{users?.displayName || "Not valid name"}</h2>
            <h1>{users?.email || "Not valid email"}</h1>
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default UserTemplete;
