import React from "react";

const WelcomePage = () => {
  return (
    <section className="welcome-page">
      <header></header>
      <div>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </div>
    </section>
  );
};

export default WelcomePage;
