import { formatDistance, subDays } from "date-fns";
import React, { useState } from "react";
import Button_spinner from "../Button_spinner/Button_spinner";
import Create_story from "../CreateStory/Create_story";
import Popup_Modal from "../Popup_modal/Popup_Modal";
import Post_content from "../Post/Post_content";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="container max-w-4xl pt-16">
      {/* create text or image */}
      <Create_story showModal={showModal} setShowModal={setShowModal} />

      {/* create post with image/text */}
      <Post_content />

      {/* modal */}
      {showModal && (
        <Popup_Modal showModal={showModal} setShowModal={setShowModal} />
      )}

    </div>
  );
};

export default Home;
