import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Vehicle from "./Vehicle";
import PageBtnContainer from "./PageBtnContainer";
import Wrapper from "../assets/wrappers/VehiclesContainer";

const VehiclesContainer = () => {
  const {
    getVehicles,
    vehicles,
    isLoading,
    page,
    totalVehicles,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getVehicles();
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }
  if (vehicles.length === 0) {
    return (
      <Wrapper>
        <h2>No vehicles to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalVehicles} vehicle{vehicles.length > 1 && "s"} found
      </h5>
      <div className="vehicles">
        {vehicles.map((vehicle) => {
          return <Vehicle key={vehicle._id} {...vehicle} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default VehiclesContainer;
