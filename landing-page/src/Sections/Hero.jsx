import React from "react";
import Button from "../component/Button";
import { dashboard } from "../assets";
const Hero = () => {
    const btnStyle = {
        margin: '35px 0',
        width: '9%'
      };
  return (
    <section>
      <div className="Trade">
        <h1>Trade cryptocurrency in seconds</h1>
        <p>
          Cryptods offers a user-friendly platform for purchasing and selling
          cryptocurrencies. Acquire Bitcoin, Ethereum, and various digital
          assets in minutes."
        </p>
        <Button style={btnStyle} />
        <img src={dashboard} alt="dashboard"/>
      </div>
    </section>
  );
};

export default Hero;

