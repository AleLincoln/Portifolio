import React, {useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import project1 from '../../assets/img/Project1.JPG'
import aleLincoln from '../../assets/img/AleLincoln.JPG'
import onTheOcean from '../../assets/img/onTheOcean.JPG'
import JustMkt from '../../assets/img/JustMkt.png'
import aluraQuiz from '../../assets/img/aluraQuiz.JPG'
import MoveIt from '../../assets/img/MoveIt.JPG'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'


const projects = [
    {
        nome: 'Move it',
        description: "A exercise game to do at work",
        tecs: 'Next Js - React - Context API ',
        url: 'https://move-it-79tqm05bp-alelincoln.vercel.app/',
        image: MoveIt
    },
    {
        nome: 'Naruto Quiz',
        description: "Quiz using Next Js features",
        tecs: 'Next Js - React ',
        url: 'https://alura-quiz-pi-ochre.vercel.app/',
        image: aluraQuiz
    },
    {
        nome: 'AleLincoln Portfolio',
        url: 'https://alelincoln.vercel.app/',
        description: "This very website you're now watching. I wanted something fast for my portfolio, so a simply build seemed like the best fit.",
        tecs: 'React - Styled Components - Animate On Scroll Library ',
        image: aleLincoln
    },
    {
        nome: 'LearnFlix',
        description: "It's a solution for learn web development for free",
        tecs: 'React - Styled Components - Rest API',
        url: 'https://learnflix-eight.vercel.app/',
        image: project1
    },
    {
        nome: 'On the Ocean',
        description: "Development of the landing page for the On the Ocean Condominium Residence and collaboration with all the marketing campaign",
        tecs: 'Wordpress',
        url: 'https://ontheocean.net/',
        image: onTheOcean
    },
    {
        nome: 'Just MKT Landing Page',
        description: "Build all the landing page, since the Mockup to the final project",
        tecs: 'HTML - CSS - Vanilla JS',
        url: 'https://github.com/AleLincoln/JustMkt',
        image: JustMkt
    }

]



const Description = styled.p`
    overflow: hidden;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    line-height:24px;

`
const TecsColor = styled.span`
    color: #00C86F


`
const CarouselImg = styled.img`
@media (max-width:600px){
    width:90%;
  }

    width:600px; 
    margin-left:auto;
    margin-right:auto;
`



const SimpleSlider = () => {
    useEffect(() =>{
        Aos.init({duration:1000})
    }, [])
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };
    return (
        <div className='carouselWorks' style={{textAlign:'center', margin:'0 1em 0 1em'}} data-aos='fadeIn'>
            <h2 className = 'carouselTitle'> Projects</h2>
            <Slider {...settings} arrows={false}>
                {projects.map((item) => <div>
                    <h3>{item.nome}</h3>
                    <Description>{item.description}</Description>
                    <Description>Tecs: <TecsColor>{item.tecs}</TecsColor></Description>
                    <a href={item.url} target='_blank' rel="noopener noreferrer">
                        <CarouselImg src={item.image} alt={item.nome}>
                            
                        </CarouselImg>
                        
                    </a>
                </div>)}
            </Slider>
        </div>
    );
}

export default SimpleSlider