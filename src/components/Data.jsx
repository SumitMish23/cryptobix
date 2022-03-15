import React from "react";
import './Feature.css'
import BTC from "../assests/bit.jpg";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Data = (props) => {
// Coins information is fetched from the props.
//console.log(`the returned ${props.id} data is:-` );
//console.log(props.name.name);
  
  return (
    <div className="card">
      <div className="top">
       
        <img src={props.name.image} alt="/" />
      </div>
      <div>
        <p className="cointext">{props.name.name}</p>
        <p> Price :-${props.name.current_price}</p>
      </div>

      {props.name.price_change_24h < 0 ? (
        <span className="red">
          <FiArrowDown />
          {props.name.price_change_24h.toFixed(2)}%
        </span>
      ) : (
        <span className="green">
          <FiArrowUpRight />
          {props.name.price_change_24h}%
        </span>
      )}
    </div>
  );
};

export default Data;
