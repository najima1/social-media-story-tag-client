import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../Auth/Auth_provider";
import CreatePost from "./CreatePost";

const Popup_Modal = ({ showModal, setShowModal }) => {
  const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // image with text handler
  const postHandler = (data) => {
    //upload image in imgbb
    Upload_image(data);

    setShowModal(false);
  };

  //upload image in imgbb
  const Upload_image = (data) => {
    const imgFile = data.file[0];
    const formData = new FormData();
    formData.append("image", imgFile);

    // image bb url
    const imageUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_KEY}`;

    fetch(imageUrl, {
      method: "POST",
      body: formData,
    })
      .then((e) => e.json())
      .then((img) => {
        const img_url = img.data.url;

        //generate post
        CreatePost(data, img_url);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* user content write here like image/text */}
          <div>
            <form onSubmit={handleSubmit(postHandler)}>
              {/* input */}
              <div>
                <textarea
                  name=""
                  className="w-full block outline-none  text-[20px] p-1 bg-[#FAF7F5]"
                  id=""
                  cols="10"
                  rows="4"
                  placeholder={`What's on your mind, ${user?.displayName}`}
                  {...register("text", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.text && (
                  <span className="text-red-400 pb-2 block">
                    This field is required
                  </span>
                )}
              </div>
              {/* add image */}
              <div className="flex items-center px-5 outline-none rounded-md bg-gray-200 w-full my-10">
                <input
                  required
                  name=""
                  className="w-full block outline-none  text-[20px] p-1 my-2"
                  type="file"
                  htmlFor="images"
                  accept="image/*"
                  {...register("file", { required: true })}
                />

                {errors.file && (
                  <span className="text-red-400 pb-2 block">
                    Image file is required
                  </span>
                )}
              </div>

              {/* upload button */}
              <div className="">
                <button
                  className="capitalize font-semibold px-5 outline-none rounded-md bg-teal-400 text-center w-full py-2 my-3"
                  type="submit"
                >
                  upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup_Modal;
