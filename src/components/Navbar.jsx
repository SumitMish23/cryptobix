import React,{useState}from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import '../index.css';
import './Hero.jsx';
import './Hero.css';
import './Footer.jsx';
import './Footer.css';
import {NavLink,Link} from 'react-router-dom';
import { Alert,Snackbar } from '@mui/material';
import './Navbar.css';



const Navbar = () => {
  const[open,setOpen]=useState(false);
  const handleClicked=()=>{
   if(open==true){
     setOpen(false);
   }
   else{
     setOpen(true);
   }
  }
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
            <button className='btn'   autoHideDuration={6000} onClick={handleClicked}>Connect Wallet</button>
          </div>
          <Snackbar open={open} >
          <Alert className='alert' severity='info' sx={{ width: '100%' }}>
          The feature is in development!
        </Alert>
            </Snackbar>;
          
          <div className="hamburger" onClick={handleclick}>
          {click ? (<FaTimes size={20} style={{color:'#333'}} />): <FaBars size={20} style={{color:"#333"}}/>}
          </div> 
           
        </div>
      </div>
  )
}

export default Navbar;