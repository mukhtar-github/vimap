import React from "react";
import Wrapper from "../assets/wrappers/VehicleInfo";

const VehicleInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default VehicleInfo;
