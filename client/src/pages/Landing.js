import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="vimap" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            vehicle <span>information</span> app
          </h1>
          <p>
            The software's features are the Collection and Storage of Vehicle
            Information, Inventory, GPS tracking, Maps, Insurance updates,
            e.t.c.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Landing;
