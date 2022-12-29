import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import UserTemplete from "./UserTemplete";

const Message = () => {
  const {
    refetch,
    isLoading,
    isError,
    data: allUsers = [],
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}/users`);
      const data = await res.data;
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="pt-16 max-w-4xl mx-auto py-24">
      <h1 className="text-xl">message</h1>

      {allUsers?.map((e) => (
        <UserTemplete key={e._id} users={e} />
      ))}
    </div>
  );
};

export default Message;
