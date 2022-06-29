import React from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddVehicle = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    make,
    registration,
    chassisNumber,
    insuranceDate,
    attachedTo,
    vehicleLocation,
    year,
    yearOptions,
    rimSize,
    rimSizeOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !make ||
      !registration ||
      !chassisNumber ||
      !insuranceDate ||
      !attachedTo ||
      !vehicleLocation
    ) {
      displayAlert();
      return;
    }
    console.log("create vehicle");
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
  };

  return <h1>Add Vehicle Page</h1>;
};

export default AddVehicle;
