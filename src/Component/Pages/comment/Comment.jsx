import React from "react";

const Comment = () => {
  return (
    <div className="my-5">
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          placeholder="comment"
          className="block px-5 outline-none rounded-md bg-gray-200 w-full py-2"
        />
        <button className="border-[1px] border-teal-600 p-[5px] rounded-sm">
          comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
