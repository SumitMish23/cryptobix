import React from 'react'
import './Hero.css';
import Crypto from '../assests/signup.png'
export const Hero = () => {
  return (
    <div className='hero' id='hero'>
         <div className="container">
             {/* Left side */}
             <div className="left-hero">
                 <p>
                     Buy and Sell Crypto 24/7 using your retirement account

                 </p>
                 <h1>Invest With IPA in your Cryptocurrencies </h1>
                 <p>Buy And Store hundreds of cryptocurrencies</p>
                 <div className="input-container">
                     <input type="email" placeholder='Enter Your Email' />
                     <button className='btn'>Learn More</button>
                 </div>
             </div>
             {/* Right Side */}
             <div className="right">
                 <div className="img-container">
                     <img src={Crypto} alt="" srcset="" />
                 </div>

            </div>

         </div>
    </div>
  )
}
