import React from 'react';
import { Button } from '../Button/Button';
import './Hero.css';
function Hero({
    headline,
    description,
    showButton,
    buttonLabel,
    smallImage,
    img,  
    imgStart,
    alt1,
    alt2,
  }) {
    return (
      <>
        <div className='home__hero-section'>
          <div className='container'>
            <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                {smallImage!=null && <div className='col'>
                    <div className='home__hero-img-wrapper'>
                    <img src={smallImage} alt={alt1} className='small__hero-img' />
                    </div>
                </div>}
                <div className='home__hero-text-wrapper'>
                  {/* <div className='top-line'>{topLine}</div> */}
                  <h1 className='heading' >
                    {headline}
                  </h1>
                  <p className='home__hero-subtitle'>
                    {description}
                  </p>
                  {/* <Link to='/sign-up'> */}
                    {showButton ? 
                    <Button  buttonColor='orange'>
                      {buttonLabel[0]}
                    </Button> :null}
                    {showButton ? 
                    <Button  buttonColor='purple'>
                      {buttonLabel[1]}
                    </Button> :null}
                  {/* </Link> */}
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                  <img src={img} alt={alt2} className='home__hero-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Hero;
