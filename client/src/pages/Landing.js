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
            As a Fleet Manager at the Organization where I work, the challenge
            of going through archives to get vehicle information for updates was
            time-consuming. As a result of that challenge, the idea of VIMAP, an
            acronym for Vehicles Information Management Application, came up to
            provide a solution to replace the hard copies method of saving and
            updating vehicle information with a simple application to save,
            access, and update vehicle information. VIMAP is a fleet wallet. The
            software's features are; but are not limited to the Collection and
            Storage of Vehicles Information, Inventory, GPS tracking, and
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
