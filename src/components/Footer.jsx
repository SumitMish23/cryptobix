import React, { useState } from 'react'
import { FaFacebook,FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    
    var today = new Date().getFullYear();
    
            
      
  return (
    <div className='footer' id='Footer'>
        <div className="container">
            <div className="col col-1"> 
            <h1>Cryp<span className='primary'>Bix</span></h1>
            </div>
            <div className="col">
                <h5>Social</h5>
                <span className="bar">
                    <a href="http://"><FaFacebook className='icon'/></a>
                    <a href="http://"><FaGithub className='icon'/></a>
                    <a href="http://"><FaLinkedin className='icon'/></a>
                    <a href="http://"><FaTwitter className='icon'/></a>

                </span>
            </div>
            <div className="col">
                <h5>Company</h5>
                <span className='bar'>
                    <a href="http://">About</a>
                    <a href="http://">Information</a>
                    <a href="http://">Legal</a>
                    <a href="http://">Privacy</a>
                </span>
            </div>
            
        </div>
             <div className='copyright' >
                 <p>All Rights Reserved @  {today}  | Sumit Mishra</p>

             </div>
    </div>
  )
}

export default Footer;