import React from "react";
import "../index.css";
import Box2 from "../component/Box2";
const All = () => {
  return (
    <section>
      <div className="everyone">
        <div>
          <span className="span2">Open to everyone</span>
          <span className="span1">
            Lightning fast transactions. Buy and sell with ease and peace of
            mind.Invest <br /> in cryptocurrency today with just a few clicks.
          </span>
        </div>
        <Box2 />
      </div>
    </section>
  );
};

export default All;
