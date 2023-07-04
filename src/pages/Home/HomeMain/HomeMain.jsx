import React from 'react';
// import './HomeMani.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Banner from './Banner';
// import Footer from '../../../shared/Footer';
import DonorsDivide from './DonorsDivide';
import User from '../../../components/user';
const HomeMain = () => {
    return (
        <div> 
        {/* // <Parallax pages={4}   className='animation'  >
        //     <ParallaxLayer offset={0} speed={0.5} >
                <Banner></Banner>
            // </ParallaxLayer>
            // <ParallaxLayer offset={1} speed={0.3} >
            //     <div id='blood2' className='layer parallax'></div>
            // </ParallaxLayer>
            // <ParallaxLayer offset={2} speed={.7} >
                 <DonorsDivide></DonorsDivide>
            // </ParallaxLayer>
            // <ParallaxLayer offset={3} speed={0.5} >
                  <User></User>
            // </ParallaxLayer>

        // </Parallax> */}
        <Banner></Banner>
        <DonorsDivide></DonorsDivide>
        <User></User>
        </div>
    );
};

export default HomeMain;
// style={{ top: '0', left: '0' }}