import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            vehicle <span>information</span> app
          </h1>
          <p>
            The Software's main features are the Collection
            and Storage of Vehicles Information, Inventory, GPS tracking, and
            Insurance updates.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="vehicle hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
