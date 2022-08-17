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
            While working as a Fleet Manager with my employer, there was this
            challenge of going through archives to get vehicle information for
            updates which was time-consuming. The challenge gave birth to the
            idea of VIMAP, an acronym for Vehicles Information Management
            Application. This software provides a solution to replace the hard
            copies method of accessing, saving, and updating vehicle
            information. VIMAP is a fleet wallet for organizations. The
            software's features are the Collection and Storage of Vehicles
            Information, Search, Updates, Graphical Data Visualization, and
            more.
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
