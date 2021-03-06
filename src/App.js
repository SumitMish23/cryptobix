import React from 'react';
import CoinPage from './CoinPage';
import { useEffect } from 'react';
import Data from './components/Data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import './index.css';
import CoinsItem from './components/CoinsItem';


import Coins from './Coins';
import {Routes,Route} from 'react-router-dom';
import WikiCoin from './components/WikiCoin';
import ReactGa from 'react-ga';

function App() {
  useEffect(() => {

    ReactGa.initialize('G-2GQ62MFQDE')
    ReactGa.pageview('/coins')
  }, [])
  
  return (
   <>
    
   <Navbar/>
  <Routes>
    
  
      <Route  path='/coins' element={[<Coins/>,<CoinPage/>]}/>
      
      <Route path='/wikicoins' element={<WikiCoin/>}>
      <Route path=':coinI' element={<WikiCoin/>}/>
      </Route>


      
    
   
  
    
   


    </Routes>
   
    <Hero/>
    {/* <Data/> */}
    <Feature/>
  
   <Signup/>
   
   
   <Footer/>
 
   </>
  );
}

export default App;
