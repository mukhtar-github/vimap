import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyUpdates } = useAppContext();
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyUpdates.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
