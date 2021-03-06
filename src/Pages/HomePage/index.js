import React, {useEffect} from 'react';
import PageDefault from '../../Components/PageDefault'
import { BrowserRouter as Router } from 'react-router-dom'
import IntroImg from './../../assets/img/IntroImg.jpg'
import Logo from './../../assets/img/Logo.png'
import { ParallaxProvider ,ParallaxBanner } from 'react-scroll-parallax'
import SimpleSlider from './../../Components/Carousel'
import {FaRegHandPeace, FaWhatsapp} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import Skills from '../../Components/Skills'
import styled from 'styled-components'
import {Animated} from "react-animated-css"
import Aos from 'aos'
import 'aos/dist/aos.css'


const HeroTitle = styled.h1`
   @media (max-width:600px){
    top:5rem;
  }

  font-size:4.5em;
  color:#00C86F;
  margin:40px;
  position:relative;
  top:8rem

`

const Intro = styled.div`
  
  padding: 40px;
`

const IntroTitle = styled.h2`
  font-weight:bold;
  font-size: 1em;
  text-align: center;
  color:white;
`

const IntroImage = styled.div`
 & img{
    width:12.5em;
    border-radius:50%;
 }
`


const IntroParagraph = styled.div`
  font-size:1em;
  text-align:center;

`


function HomePage() {
  useEffect(() =>{
    Aos.init({duration:1500})
  }, [])

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
            height:'100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.700)',
            backgroundImage:{Logo}
            }}id='mainSection'>
            
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={4000}>

              <HeroTitle >Hello <FaRegHandPeace/>,<br/> I'm Lincoln</HeroTitle>

            </Animated>
              

            
           
          </div> 
         
        </ParallaxBanner>
        </ParallaxProvider>
        
        <Intro className='introWrapper' id='About me'>
        <IntroTitle data-aos='fade-left'>
            About me
          </IntroTitle>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
         
          <IntroImage data-aos='fade-right'>
            <img src={IntroImg} alt='Foto Lincoln' />
          </IntroImage>
          <IntroParagraph>

            <p data-aos='fade-left'>
            Hey! I'm Lincoln Alexandrino and I'm a Front-End Developer.
            I've been working and studying web programming since 2019.</p>


          </IntroParagraph>
          
          </div>

        </Intro>

            <div id='Skills' style={{height:'30vh', margin:'4em 1.5em 0 1.5em'}}  data-aos='fadeIn'>
                <IntroTitle>
                  Skills
                  </IntroTitle>
                <Skills/>

            </div>
        

          <div style={{
            marginTop:'100px',
            }} id='Projects'>
            <SimpleSlider className/>
            
          </div>


          <div className='contact' id='Contacts' style={{marginTop:'100px', height:'30vh'}} data-aos='fadeIn'>

            <IntroTitle>Contact</IntroTitle>
            <p style={{textAlign:'center'}}>If you want to talk, you can find me at:<br/><br/>
             <AiOutlineMail style={{color:'#00C86F'}}/> lincoln_alexandrino@hotmail.com<br/>
              <FaWhatsapp style={{color:'#00C86F'}}/> +351 939 918 288 
            </p>
            
            
          </div>

      </PageDefault>

    </Router>

  );
}

export default HomePage;
