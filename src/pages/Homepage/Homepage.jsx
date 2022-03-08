import React from 'react';
import Hero from '../../components/Hero/Hero';
import Uniqueness from '../../components/Uniqueness/Uniqueness';
import { homeData,homeData2,homeData3,homeData4,homeData5 } from './Data';
import './style.css'

const Homepage = () => {

            return <>
                  <div>
                    
                    <div className='home-page-svg'>
                      <img src="images/purplewave.svg" alt="hill" />
                    </div>
                    <Hero {...homeData}/>
                    <Uniqueness />
                    <Hero {...homeData2}/>
                    <Hero {...homeData3}/>
                    <Hero {...homeData4}/>
                    <Hero {...homeData5}/>
                  </div>
                  </>;
};

export default Homepage;
