import React from 'react';
import '../components/Coinsstyling.css';
import CoinPage from '../CoinPage';

const CoinsItem = (props) => {
    console.log(props.nameofcoin);
  return (
    <div className="coin-row">
       
        <div className="img-symbol">
        <p>{props.id+1}</p>
        <p>{props.symbol}</p>
         
         <img src={props.image} width="100px" alt="" srcset="" />
         <p>${props.current_price.toLocaleString()}</p>
         <p>${props.total_volume.toLocaleString()}</p>
         <p>${props.market_cap.toLocaleString()}</p>

         {/* 
         <p>{props.price_change_percentage}</p>
         

         <p className="hide-mobile">{props.coin.total_volume}</p> */}
       
        </div>

            

    </div>
  )
}

export default CoinsItem;