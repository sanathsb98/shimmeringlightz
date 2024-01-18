import React from 'react';
import '../home/Home.css';
import OurInfo from '../../components/ourinfo/OurInfo';
import ProductsWeOffer from '../../components/productsweoffer/ProductsWeOffer';
import OurPassion from '../../components/ourpassion/OurPassion';
import Footer from '../../components/footer/Footer';
import {motion} from 'framer-motion'



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
            <motion.div whileHover={{scale:1.1}} className='home-explore-btn'>Explore Products</motion.div>
           </div>
          
        </div>
    </div>
    <OurInfo/>
    <ProductsWeOffer/>
    <OurPassion/>
   
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home