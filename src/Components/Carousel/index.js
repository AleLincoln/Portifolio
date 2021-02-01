import React, {useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Project1 from './../../assets/img/Project1.JPG'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const projects = [
    {
        nome: 'LearnFlix',
        url: 'https://learnflix-eight.vercel.app/',
        image: {Project1}
    },
    {
        nome: 'LearnFlix',
        url: 'https://learnflix-eight.vercel.app/',
        image: {Project1}
    },
    {
        nome: 'LearnFlix',
        url: 'https://learnflix-eight.vercel.app/',
        image: {Project1}
    }

]




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
        <div className='carouselWorks' style={{textAlign:'center'}} data-aos='slide-up'>
            <h2 className = 'carouselTitle'> Projects</h2>
            <Slider {...settings} arrows={false}>
                {projects.map((item) => <div>
                    <h3>{item.nome}</h3>
                    <a href={item.url} target='_blank' rel="noopener noreferrer">
                        <img src={Project1} alt={item.nome} style={{width:600, marginLeft:'auto', marginRight:'auto'}}>
                            
                        </img>
                        
                    </a>
                </div>)}
            </Slider>
        </div>
    );
}

export default SimpleSlider