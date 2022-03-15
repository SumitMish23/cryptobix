import React,{useState}from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import '../index.css';
import './Hero.jsx';
import './Hero.css';
import './Footer.jsx';
import './Footer.css';
import {NavLink,Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const[click,setclick]=useState(false);
  console.log(typeof click);
  const handleclick=()=>{
    setclick(!click);

  }
  return (
      <div className='header'>
        <div className='container'>
            <h1>Cryp<span className='primary'>Bix</span></h1>
            <ul className={click ? 'nav-menu actives ': 'nav-menu' }>
              <li>
              <a href='/'>Home</a>
                
              </li>
              <li>
              <NavLink to="/coins"  activeClassName="active">Features</NavLink>
              </li>
              <li>
                <a href='/'>Earn</a>
              </li>
              <li>
                <a href='#Footer'>Contact</a>
              </li>
              </ul>
          <div className="btn-group">
            <button className='btn'>Connect Wallet</button>
          </div>
          <div className="hamburger" onClick={handleclick}>
          {click ? (<FaTimes size={20} style={{color:'#333'}} />): <FaBars size={20} style={{color:"#333"}}/>}
          </div> 
           
        </div>
      </div>
  )
}

export default Navbar;