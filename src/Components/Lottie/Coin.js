import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./coin.json";

class Coin extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    );
  }
}

export default Coin;
