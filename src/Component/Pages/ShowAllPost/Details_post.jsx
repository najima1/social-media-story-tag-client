import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import person from "../../assets/people_2.png";
import teamwork from "../../assets/teamwork.png";
import like from "../../assets/like.png";
import love from "../../assets/love.png";
import { useAuthContext } from "../../Auth/Auth_provider";
import { useQuery } from "@tanstack/react-query";

const Details_post = () => {
  const { user } = useAuthContext();
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: postData = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["user", "post"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_URL}/user/post/${id}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }


  return (
    <div key={postData._id} className="pt-16 max-w-4xl mx-auto">
      {/* image banner */}
      <div className="">
        <img
          className="w-full mx-auto text-center"
          src={postData?.image}
          alt=""
        />
        <div className="max-w-[14%] -mt-5">
          <img
            className="rounded-full flex-1 border-[2px] border-teal-400 bg-red-400"
            src={user?.photoURL ? user?.photoURL : teamwork}
            alt=""
          />
        </div>
      </div>

      {/* lorem text */}
      <div>
        <p className="block py-6">
          {postData?.text} I have come to believe that the whole world is an
          enigma, a harmless enigma that is made terrible by our own mad attempt
          to interpret it as though it had an underlying truth. (Umberto Eco)
        </p>
      </div>

      {/* like & comment */}
      {/* like/react & comment */}
      <div className="flex justify-between py-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-1">
            {/* heart */}
            <img src={love} alt="" />

            {/* like */}
            <img src={like} alt="" />
          </div>
          {10}
        </div>

        <div className="space-x-2">
          <strong>Comment</strong>
          <span>{15}</span>
        </div>
      </div>
    </div>
  );
};

export default Details_post;
