import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-vehicles">all vehicles</Link>
        <Link to="add-vehicle">add vehicles</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
