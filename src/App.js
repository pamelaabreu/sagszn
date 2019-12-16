import React from "react";
import "./App.css";

import WordInfo from "./assets/info";

function App() {
  const wordInfoKeys = Object.keys(WordInfo);
  const cardRender = wordInfoKeys.map((word, index) => {
    const { image, definition } = WordInfo[word];

    const oddOrEven = index % 2 === 0 ? "card-0" : "card-1";

    return (
      <div className="m-2 p-1 box card" key={index}>
        <img
          className="card-img-top"
          src={"" + image}
          alt={word.toUpperCase() + " Image"}
        />

        <div className="card-body">
          <h2 className="font-weight-bolder card-title">
            {index}. {word}
          </h2>
          <p className={"card-text font-weight-bolder " + oddOrEven}>
            {definition}
          </p>
        </div>
      </div>
    );
  });

  const bdayCard = (
    <div className="m-2 p-1 box card pinkBG">
      <div className="card-body pinkBG">
        <p className={"card-text font-weight-bolder "}>
          HAPPY BIRTHDAY!! Hope you know you're amazing and one of the coolest
          person I've gotten to know! Thank you for being you! Thank you for
          being honest and sharing with me everything you’ve felt. Thank you for
          being the most prepared bitch I know! LOL it’s time you run the world
          because you’re a natural leader. I’m so ready for you to disrupt the
          tech industry and show em what powerful backend gay bitches looks
          like! Wish u all the best and luv u! 💖Pam P.S. This is the start to
          creating a drawing for each of your saved werds 😸
        </p>
      </div>
    </div>
  );

  return (
    <div className="app min-vh-100 p-5">
      <header className="logo-container">
        <h1 className="logo h1 text-center">SAGSZN</h1>
      </header>

      <div className="container d-flex flex-column justify-content-center mt-5">
        <section className="card-container p-0 mt-5 mb-5">
          {bdayCard}
          {cardRender}
        </section>

        <h2 className="made-by font-weight-bolder h6 position-fixed">
          Made By Pam w love
        </h2>
      </div>
    </div>
  );
}

export default App;
