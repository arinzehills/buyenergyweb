import React from 'react';
import Hero from '../../components/Hero/Hero';
import Uniqueness from '../../components/Uniqueness/Uniqueness';
import { homeData,homeData2,homeData3 } from './Data';

const Homepage = () => {

            return <>
                    <Hero {...homeData}/>
                    <Uniqueness />
                    <Hero {...homeData2}/>
                    <Hero {...homeData3}/>
                  </>;
};

export default Homepage;
