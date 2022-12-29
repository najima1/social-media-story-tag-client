import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Auth/Auth_provider";
import Button_spinner from "../Button_spinner/Button_spinner";
import SaveUser from "./SaveUser";

const Signup = () => {
  const { createUser, updateUserProfile, loading, log_out_user } =
    useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //navigate user
  const navigate = useNavigate();

  //signup handler
  const SignupHandler = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;

        //user info
        const userObj = {
          displayName: data.name,
        };

        //update user name
        updateUserProfile(userObj)
          .then(() => {
            toast.success("User created");
            navigate("/login");

            //save user in database
            SaveUser(user, data);
            reset();

            // sign out user
            log_out_user()
              .then(() => {})
              .catch((e) => console.log(e.message));
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="container py-3 md:py-24">
      <section className="flex items-center justify-center my-9">
        <form
          onSubmit={handleSubmit(SignupHandler)}
          className="w-full max-w-xl space-y-6 md:px-16 md:shadow-2xl p-4 py-16"
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
              {...register("name", {
                required: "Name is required",
                maxLength: 20,
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
              {...register("university", {
                required: "university is required",
                maxLength: 40,
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
          {/* profile image */}
          {/* <div className="relative ">
            <span className="absolute top-[8px] pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </span>

            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "image is required",
              })}
              aria-invalid={errors.image ? "true" : "false"}
              className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            />
            {errors.image && (
              <small className="text-red-400" role="alert">
                {errors.image.message}
              </small>
            )}
          </div> */}
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
          {/* password */}{" "}
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="text"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "minmun length is 6 character",
                },
                maxLength: {
                  value: 10,
                  message: "maximum length is 10 character",
                },
                pattern: {
                  value: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/,
                  message:
                    "Your password must contain at least one special character.",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
              className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
              placeholder="password"
            />

            {errors.password && (
              <small className="text-red-400" role="alert">
                {errors.password.message}
              </small>
            )}
          </div>
          {/* submit button */}
          <div className="mt-6 mx-auto text-center">
            {loading ? (
              <Button_spinner />
            ) : (
              <button
                type="submit"
                className="w-full px-6 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-teal-400  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            )}

            <div className="mt-6 text-center ">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400 ml-2"
              >
                login
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
