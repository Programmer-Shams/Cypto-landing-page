import React from "react";
import '../index.css'
import Box from "../component/box";
const Payment = () => {
  return (
    <section>
      <div className="payment">
       <div>
       <span className="span2">Available payment methods</span>
        <span className="span1">
          Our app lets you use card to buy the most popular cryptocurrencies
          through any of our payment methods.
        </span>
       </div>
        <Box />
      </div>
    </section>
  );
};

export default Payment;
