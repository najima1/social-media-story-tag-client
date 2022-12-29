import React from "react";
import { useForm } from "react-hook-form";
import update_info from "./update_info";

const About_modal = ({ userInfo, refetch, setAboutModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const userInfoUpdateModal = (data) => {
    const updatedObj = {
      email: data.email,
      displayName: data.name,
      address: data.address,
      university: data.university,
    };

    //update user data function
    update_info(updatedObj);
    refetch();
    setAboutModal(false);
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {/* user information here */}
          <div>
            <form
              onSubmit={handleSubmit(userInfoUpdateModal)}
              className="w-full max-w-xl space-y-6  p-4 py-16"
            >
              {/* first name */}
              <div className="relative ">
                <span className="absolute top-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  defaultValue={userInfo.displayName}
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 40,
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                  placeholder="Username"
                />
                {errors.name?.type === "required" && (
                  <small className="block text-red-400" role="alert">
                    First name is required
                  </small>
                )}
              </div>
              {/* university */}
              <div className="relative ">
                <span className="absolute top-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  defaultValue={userInfo.university}
                  {...register("university", {
                    required: "university is required",
                    maxLength: 50,
                  })}
                  aria-invalid={errors.university ? "true" : "false"}
                  className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                  placeholder="university"
                />
                {errors.university?.type === "required" && (
                  <small className="block text-red-400" role="alert">
                    University is required
                  </small>
                )}
              </div>
              {/* address */}
              <div className="relative ">
                <span className="absolute top-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  defaultValue={userInfo.address}
                  {...register("address", {
                    required: "address is required",
                    maxLength: 40,
                  })}
                  aria-invalid={errors.address ? "true" : "false"}
                  className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                  placeholder="address"
                />
                {errors.address?.type === "required" && (
                  <small className="block text-red-400" role="alert">
                    Address is required
                  </small>
                )}
              </div>

              {/* email */}
              <div className="relative ">
                <span className="absolute top-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  defaultValue={userInfo.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                  placeholder="email"
                />
                {errors.email && (
                  <small className="text-red-400" role="alert">
                    {errors.email.message}
                  </small>
                )}
              </div>

              {/* submit button */}
              <div className="mt-6 mx-auto">
                <button
                  type="submit"
                  className="w-full px-6 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-teal-400  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_modal;
