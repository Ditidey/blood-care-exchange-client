import React from 'react';
// import './HomeMani.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Banner from './Banner';
// import Footer from '../../../shared/Footer';
import DonorsDivide from './DonorsDivide';
import User from '../../../components/user';
import WeProvides from './WeProvides';
import HomeConsultan from './HomeConsultan';
import DonationBenifits from './benifits/DonationBenifits';
import Ads from './Ads';
const HomeMain = () => {
    return (
        <div> 
        <Banner></Banner>      
        <WeProvides></WeProvides>
        <DonationBenifits></DonationBenifits>
        <HomeConsultan></HomeConsultan>
        <DonorsDivide></DonorsDivide>
        <Ads></Ads>
        <User></User>
        </div>
    );
};

export default HomeMain;
// style={{ top: '0', left: '0' }}