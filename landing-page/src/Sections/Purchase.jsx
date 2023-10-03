import React from "react";
import { dashboard2 } from "../assets";
import Button from "../component/Button";

const Purchase = () => {
    const btnStyle = {
        margin: '35px 0',
        width: '20%'
      };
  return (
    <section>
      <div className="purchase">
        <img src={dashboard2} alt="" />
        <div>
          <h1>Purchase Bitcoin with your credit card</h1>
          <p>
            "Trade popular digital currencies swiftly and conveniently while
            seamlessly managing them in one centralized location. Gain rapid
            entry to the cryptocurrency realm."
          </p>
          <Button style={btnStyle} />
        </div>
      </div>
    </section>
  );
};

export default Purchase;
