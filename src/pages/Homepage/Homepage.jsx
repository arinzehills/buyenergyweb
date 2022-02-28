import React from 'react';
import Hero from '../../components/Hero/Hero';
import Uniqueness from '../../components/Uniqueness/Uniqueness';
import { homeData,homeData2,homeData3 } from './Data';
import './style.css'

const Homepage = () => {

            return <>
                  <div>
                    
                    {/* <div className='home-page-svg'>
                      <img src="images/image2vector.svg" alt="heill" />
                    </div> */}
                    <Hero {...homeData}/>
                    <Uniqueness />
                    <Hero {...homeData2}/>
                    <Hero {...homeData3}/>
                  </div>
                  </>;
};

export default Homepage;
