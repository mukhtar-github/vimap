import React from "react";
import StatsItem from "./StatsItem";
import { useAppContext } from "../context/appContext";
import { FaClipboardCheck, FaClock } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending vehicles",
      count: stats.pending || 0,
      icon: <FaClock />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "allocated vehicles",
      count: stats.allocated || 0,
      icon: <FaClipboardCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "auctioned vehicles",
      count: stats.auctioned || 0,
      icon: <RiAuctionFill />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
