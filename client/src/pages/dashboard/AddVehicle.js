import React from "react";
import { FormRow, FormRowSelect, Alert } from "../../components";
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

  const handleVehicleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit vehicle" : "add vehicle"} </h3>
        {showAlert && <Alert />}

        {/* make */}
        <div className="form-center">
          <FormRow
            type="text"
            name="make"
            value={make}
            handleChange={handleVehicleInput}
          />
          {/* registration */}
          <FormRow
            type="text"
            name="registration"
            value={registration}
            handleChange={handleVehicleInput}
          />
          {/* chassis number */}
          <FormRow
            type="text"
            labelText="chassis number"
            name="chassisNumber"
            value={chassisNumber}
            handleChange={handleVehicleInput}
          />
          {/* attached to */}
          <FormRow
            type="text"
            labelText="attached to"
            name="attachedTo"
            value={attachedTo}
            handleChange={handleVehicleInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="location"
            name="vehicleLocation"
            value={vehicleLocation}
            handleChange={handleVehicleInput}
          />
          {/* insurance date */}
          <FormRow
            type="text"
            labelText="insurance date"
            name="insuranceDate"
            value={insuranceDate}
            handleChange={handleVehicleInput}
          />
          {/* vehicle year */}
          <FormRowSelect
            name="year"
            value={year}
            handleChange={handleVehicleInput}
            list={yearOptions}
          />

          {/* vehicle rim size */}

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddVehicle;
