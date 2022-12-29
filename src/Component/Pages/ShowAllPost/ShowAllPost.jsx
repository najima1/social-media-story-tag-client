import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import PostTemplete from "../Post/PostTemplete";

const ShowAllPost = () => {
  const {
    isLoading,
    isError,
    data: showPost = [],
    error,
  } = useQuery({
    queryKey: ["user", "post"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_URL}/user/post`).then((res) => res.json()),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="max-w-4xl mx-auto pt-16">
      {showPost.map((data) => (
        <PostTemplete key={data._id} postData={data} />
      ))}
    </div>
  );
};

export default ShowAllPost;
