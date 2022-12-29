import React from "react";
import "./window_spinner.css";

const Window_spinner = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center z-50">
      <span className="windowPinner block"></span>
    </div>
  );
};

export default Window_spinner;
