import React, {useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import project1 from '../../assets/img/Project1.JPG'
import aleLincoln from '../../assets/img/AleLincoln.JPG'
import onTheOcean from '../../assets/img/onTheOcean.JPG'
import JustMkt from '../../assets/img/JustMkt.png'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'


const projects = [
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
    width:33.33.em;
    margin-left:auto;
    margin-right:auto;
    line-height:24px;

`
const TecsColor = styled.span`
    color: #00C86F


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
        <div className='carouselWorks' style={{textAlign:'center', margin:'0 1em 0 1em'}} data-aos='slide-up'>
            <h2 className = 'carouselTitle'> Projects</h2>
            <Slider {...settings} arrows={false}>
                {projects.map((item) => <div>
                    <h3>{item.nome}</h3>
                    <Description>{item.description}</Description>
                    <Description>Tecs: <TecsColor>{item.tecs}</TecsColor></Description>
                    <a href={item.url} target='_blank' rel="noopener noreferrer">
                        <img src={item.image} alt={item.nome} style={{width:600, marginLeft:'auto', marginRight:'auto'}}>
                            
                        </img>
                        
                    </a>
                </div>)}
            </Slider>
        </div>
    );
}

export default SimpleSlider