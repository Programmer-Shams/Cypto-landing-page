import React from "react";
import Button from "../component/Button";
import { monitor } from "../assets";

const Investment = () => {
    const btnStyle = {
        margin: '35px 0',
        width: '20%'
      };
  return (
    <section>
      <div className="investment">
        <div className="Moniter">
          <h1>Monitor your investment holdings</h1>
          <p>
            "CoinFalcon provides you with the tools to monitor your funds
            effortlessly. You can track your assets by time or analyze your
            profit and loss, giving you a precise overview of your investment
            performance."
          </p>
          <Button style={btnStyle} />
        </div>
        <div className="monitorImg"><img src={monitor} alt="monitor" /></div>
      </div>
    </section>
  );
};

export default Investment;
