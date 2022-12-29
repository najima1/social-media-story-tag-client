import React, { useState } from "react";
import { useAuthContext } from "../../Auth/Auth_provider";
import teamwork from "../../assets/teamwork.png";
import person from "../../assets/people_2.png";
import "./banner.css";
import About_info from "./About_info";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import About_modal from "./About_modal";

const About = () => {
  const { user } = useAuthContext();
  const [aboutModal, setAboutModal] = useState(false);

  const {
    refetch,
    isLoading,
    isError,
    data: userInfo = [],
    error,
  } = useQuery({
    queryKey: ["filterUser"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/filterUser/${user?.email}`
      );
      const data = await res.data;

      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="pt-16 max-w-4xl mx-auto relative">
        <div className="bg-banner shadow-md pt-4 mt-20">
          <img className="mx-auto text-center" src={person} alt="" />
          <div className="max-w-[14%] md:max-w-[14%] absolute top-[90%] md:top-[80%] left-[5%]">
            <img
              className="rounded-full flex-1 border-[2px] border-teal-400 bg-red-400"
              src={user?.photoURL ? user?.photoURL : teamwork}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* user about info */}
      <div className="my-16">
        <About_info setAboutModal={setAboutModal} userInfo={userInfo} />
      </div>

      {/* about modul */}
      {aboutModal && (
        <About_modal
          setAboutModal={setAboutModal}
          refetch={refetch}
          userInfo={userInfo}
        />
      )}
    </div>
  );
};

export default About;
