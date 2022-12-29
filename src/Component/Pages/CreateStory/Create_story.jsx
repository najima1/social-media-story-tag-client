import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import teamwork from "../../assets/teamwork.png";
import { useAuthContext } from "../../Auth/Auth_provider";

const Create_story = ({ showModal, setShowModal }) => {
  const { user } = useAuthContext();

  const setShow_modal = () => {
    setShowModal(true);
  };

  return (
    <div className="">
      {user?.uid && (
        <div className="flex items-center gap-x-3 py-3">
          <div className="w-[9%] md:w-[6%] aspect-auto">
            <Link to="">
              {user?.photoURL ? (
                <img
                  className="rounded-full flex-1 border-[2px] border-teal-400 "
                  src={user?.photoURL || teamwork}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-full flex-1 border-[2px] border-teal-400"
                  src={teamwork}
                  alt=""
                />
              )}
            </Link>
          </div>

          <div className="w-full">
            <label
              onClick={() => setShow_modal()}
              htmlFor="my-modal-3"
              className="block px-5 outline-none rounded-md bg-gray-200 w-full py-2"
            >
              What's on your mind, {user?.displayName}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create_story;
