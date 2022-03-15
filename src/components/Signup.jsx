import React from 'react';
import './Signup.css';
import signup from '../assests/signup1.png';

const Signup = () => {
  return (
    <div className='signup'>
        <div className="container">
            {/* left */}
            <div className="left">
                <img src={signup} alt="" srcset="" />
            </div>


            {/* right */}
            <div className="right">
                <h2>Earn passive income with crypto</h2>
                <p>Earn up to 12% annual rewards on 38+ digital assests.Simply Download the app and hold your assests in there.</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter Your Email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Signup