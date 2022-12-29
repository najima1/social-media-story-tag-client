import React, { useEffect } from "react";
import { useAuthContext } from "../../Auth/Auth_provider";
import "./Post.css";

import Comment from "../comment/Comment";
import PostTemplete from "./PostTemplete";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import axios from "axios";

const Post_content = () => {
  const { user } = useAuthContext();
  const {
    refetch,
    isLoading,
    isError,
    data: postData = [],
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
    <div className="">
      {/* show post from databese */}
      {postData.slice(0, 3).map((posts) => (
        <PostTemplete postData={posts} key={posts._id} />
      ))}
    </div>
  );
};

export default Post_content;
