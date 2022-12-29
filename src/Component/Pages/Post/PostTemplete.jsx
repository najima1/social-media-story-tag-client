import React, { useContext, useState } from "react";
import like from "../../assets/like.png";
import love from "../../assets/love.png";
import teamwork from "../../assets/teamwork.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Auth/Auth_provider";
import Comment from "../comment/Comment";

const PostTemplete = ({ postData }) => {
  const { user } = useAuthContext();
  const [likeCount, setCountLikeHeart] = useState(0);

  return (
    <div className="md:shadow-md p-6">
      {/* profile with name */}
      <div className="flex justify-between ">
        <div className="flex items-center gap-x-4 py-3">
          <div className="w-[9%] md:w-[6%]">
            <Link to="/about">
              {user?.photoURL ? (
                <img
                  className="rounded-full flex-1 border-[2px] border-teal-400 bg-red-400"
                  src={user?.photoURL || teamwork}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-full flex-1 border-[2px] border-teal-400 bg-red-400"
                  src={teamwork}
                  alt=""
                />
              )}
            </Link>
          </div>
          <div>
            <strong className="flex items-center gap-x-2">
              <p className="capitalize ">
                {user?.displayName && user?.displayName}
              </p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-teal-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </span>
              <span className="text-[#9E9FC1] hidden md:block">
                posted an update
              </span>
            </strong>

            <small className="font-semibold">{postData?.createdAt}</small>
          </div>
        </div>
        <div className="p-2">
          <Link to={`/details/${postData._id}`} className="underline block">
            Details
          </Link>
        </div>
      </div>

      {/* text with image */}
      <div className="">
        {/* text */}
        <p className="py-4 min-h-5">{postData?.text}</p>

        <div className="postedImg flex items-center justify-center py-5 max-h-60">
          <img src={postData?.image} className="max-h-60 py-5 " alt="" />
        </div>
      </div>

      {/* like/react & comment */}
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-1">
            {/* heart */}
            <img
              onClick={() => setCountLikeHeart((prev) => prev + 1)}
              src={love}
              alt=""
            />

            {/* like */}
            <img
              onClick={() => setCountLikeHeart((prev) => prev + 1)}
              src={like}
              alt=""
            />
          </div>
          {likeCount}
        </div>

        <div className="space-x-2">
          <strong>Comment</strong>
          <span>{15}</span>
        </div>
      </div>

      {/* comment */}
      <Comment />
    </div>
  );
};

export default PostTemplete;
