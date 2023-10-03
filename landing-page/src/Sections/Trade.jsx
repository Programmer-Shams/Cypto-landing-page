import React from "react";
import "../index.css";
import { appstore, phone, playstore } from "../assets";
const Trade = () => {
  return (
    <section>
      <div className="trade_on">
        <div style={{}}>
          <img src={phone} alt="Trade" width={250} style={{marginLeft:'-15rem'}}/>
        </div>
        <div style={{width:'30rem', color:'#343434'}}>
          <h1 style={{fontSize:'2.5rem'}}>Trade on the go</h1>
          <p style={{lineHeight:'140%', margin:'20px 0', textAlign:'left'}}>
            No matter where you are, trading is just one click away. Stay
            updated on your investment anytime and stay informed on the latest
            price of Bitcoin, Ethereum, and other trending digital assets.
          </p>
          <div>
            <img src={appstore} width={70} />
            <img src={playstore}  width={75} style={{marginLeft:'8px'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
