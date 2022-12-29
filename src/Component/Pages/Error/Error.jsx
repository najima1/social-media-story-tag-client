import React from "react";
import { Link } from "react-router-dom";
import "./errors.css";

const Error = () => {
  return (
    <div className="">
      <section className="bg-error w-full h-screen flex items-center p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
