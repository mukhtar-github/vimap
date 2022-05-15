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
            The software's features are the Collection and Storage of Vehicle
            Information, Inventory, GPS tracking, Maps, Insurance updates,
            e.t.c.
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
