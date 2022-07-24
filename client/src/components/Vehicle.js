import React from "react";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Vehicle";
import VehicleInfo from "./VehicleInfo";

const Vehicle = ({
  _id,
  make,
  registration,
  chassisNumber,
  insuranceDate,
  attachedTo,
  vehicleLocation,
  year,
  createdAt,
  status,
}) => {
  const { setEditVehicle, deleteVehicle } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{make.charAt(0)}</div>
        <div className="info">
          <h5>{year}</h5>
          <p>{make}</p>
        </div>
      </header>
    </Wrapper>
  );
};

export default Vehicle;
