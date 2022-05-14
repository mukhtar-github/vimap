import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="vimap" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="vehicle hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fliud-width);
    width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
`;

export default Landing;
