import React from 'react';
import PageDefault from '../../Components/PageDefault'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import IntroImg from './../../assets/img/IntroImg.jpg'
import Lincoln from './../../assets/img/Lincoln.jpeg'
import Logo from './../../assets/img/Logo.png'
import { ParallaxProvider ,ParallaxBanner } from 'react-scroll-parallax'
import SimpleSlider from './../../Components/Carousel'


const Intro = styled.div`
  background-color:rgba(0, 0, 0, 0.700);
  padding: 40px;
  padding-top:4.6em;
`

const IntroTitle = styled.h2`
  font-weight:bold;
  font-size: 20px;
  text-align: center;
`

const IntroImage = styled.div`
 & img{
    width:300px;
 }
`

const HeroTitle = styled.h1`
  
  font-size:4.5rem;
  color:#00C86F;
  margin:40px;
  position:relative;
  top:8rem;

  

`


function HomePage() {
  return (


    <Router>

      <PageDefault>
        <ParallaxProvider>


        <ParallaxBanner
          className="parallaxBanner"
          layers={[
            {
                image: 'https://i.pinimg.com/originals/1e/ef/c5/1eefc5567dc5c55f67ef6849b9235582.jpg',
                amount: 0.5,
            },
          ]}
          style={{
            height: '90vh',
            position:'relative'
          }}

          id='mainSection'
        >
        
          <div style={{
            display:'flex',
            flexDirection:'row',
            position:'absolute',
            width:'100%',
            height:'90vh',
            backgroundColor: 'rgba(0, 0, 0, 0.700)',
            backgroundImage:{Logo}
            }}id='mainSection'>
          
            <HeroTitle>Hello, I'm Lincoln</HeroTitle>
           
          </div> 
         
        </ParallaxBanner>
        </ParallaxProvider>
       
       
        <Intro className='introWrapper' id='About me'>
        <IntroTitle>
            About me
          </IntroTitle>
          <div style={{display:'flex'}}>
          <IntroImage>
            <img src={Lincoln} alt='Foto Lincoln' />
          </IntroImage>

          <div className='IntroParagraph' >

            <p style={{color:'white'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>


          </div>
          </div>

        </Intro>
        

          <div style={{
            marginTop:'100px',
            }} id='Projects'>
            <SimpleSlider className/>
            
          </div>


          <div className='contact' id='Contacts' style={{marginTop:'100px'}}>

            <IntroTitle>Contact</IntroTitle>



          </div>

      </PageDefault>

    </Router>

  );
}

export default HomePage;
