import React from 'react';
import '../home/Home.css';
import OurInfo from '../../components/ourinfo/OurInfo';
import ProductsWeOffer from '../../components/productsweoffer/ProductsWeOffer';



const Home = () => {
  return (
    <>
    <div className='home-container'>
    <div className='home-page'>
       
        <div className='home-content'>
         <div className='home-empty-space'></div>
           <div className='home-content-info'>
            <div className='home-title'>Brightening Spaces,<br className='gaps'/> Creating Moments</div>
            <div className='home-description'>a world where lighting is an art form, a story telling <br className='gaps'/> medium, and a key player in sustainable design.</div>
            <div className='home-explore-btn'>Explore Products</div>
           </div>
          
        </div>
    </div>
    <OurInfo/>
    
    </div>
    <ProductsWeOffer/>
    </>
  )
}

export default Home