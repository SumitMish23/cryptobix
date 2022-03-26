import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Feature.css'
import BTC from '../assests/bit.jpg';
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi'
import Data from './Data';
import CoinsItem from './CoinsItem';
import Coins from '../Coins';
import {Link} from 'react-router-dom';


import { Button } from '@mui/material';
import CoinPage from '../CoinPage';
const Feature = () => {


    const[coins,setCoins]=useState();
    
    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';
    useEffect(()=>{
        axios.get(url).then((response)=>{

      //  Fetching the data and assigining it in coins array.
        setCoins(response.data);
      
        }).catch((e)=>{
        console.log(e);
    })
},[])
  const clicked=()=>{
  
    window.scrollTo(0, 100);
  }
    
    if(!coins) return null;
   
  return (
    <div className="featured">
        <div className="container">
            {/* Left */}
            <div className="left">
                <h2>Explore Top Crypto's Like BitCoin,Etherum and Dopecoin</h2>
                <p>See All the Available Assets,Cryptocurriencies and NFT's</p>
                <Link to='/coins'>
   
                <Button  variant="contained" color="info" className='btn'>See More Coins </Button>
              
                </Link>
               

            </div>
            {/* Right */}

            <div className="right">
             
              {
              coins.map((itemval,index)=>{
                // Coins information is trasfered to the Data Component through the props .
                return <Data name={itemval} id={index}/>
              })
            }
            </div>









        </div>
    </div>
 

    
  )
}

export default Feature;