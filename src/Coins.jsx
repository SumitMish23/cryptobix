import React from 'react';
import './index.css';
import './components/Coinsstyling.css';


const Coins = (props) => {
 
 
     return (
      <>
   
    
      <div className="container">
        <div>
          <div className="heading">
            <p>#</p>
            <p className="coin-name">{props.id}</p>
            <p>Name</p>
            <p>Symbol</p>

            <p>24hr</p>
            <p className="hide-mobile volume">Volume</p>
            <p className="hide-mobile " id='market'>Mkt Caps</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coins;