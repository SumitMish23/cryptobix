import { Accordion } from '@mui/material';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import CoinsItem from './components/CoinsItem.jsx';
import { Link } from 'react-router-dom';
import { Hero } from './components/Hero.jsx';
import Footer from './components/Footer.jsx'
import WikiCoin from './components/WikiCoin';

const CoinPage = () => {
    const [coins,setCoins]=useState([]);
    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=&page=1&sparkline=false';
  
    useEffect(() => {
       axios.get(url).then((response)=>
       {setCoins(response.data)
    //    console.log(response.data[1]);
    }).catch((error)=>{
        console.log(error);
    })
    },[])
   
   // console.log("coins =>"+coins);
    
    
  return (
  <>
    {coins.map((element,index)=>{
     //console.log("element is "+ element);
    return ( 
      <Link to={`/wikicoins/${element.id}`} key={element.id} element={<WikiCoin/> }>
    <CoinsItem nameofcoin={element.name} id={index} image={element.image} symbol={element.symbol} current_price={element.current_price} total_volume={element.total_volume} market_cap={element.market_cap}/> )
    </Link>
    )})}
  </>
  )
}

export default CoinPage;
