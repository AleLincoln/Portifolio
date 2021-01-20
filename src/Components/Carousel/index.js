import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Project1 from './../../assets/img/Project1.JPG'


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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='carouselWorks' style={{textAlign:'center'}}>
            <h2 className = 'carouselTitle'> Projects</h2>
            <Slider {...settings}>
                {projects.map((item) => <div>
                    <h3>{item.nome}</h3>
                    <a href={item.url} target='_blank'>
                        <img src={Project1} alt={item.nome} style={{width:600, marginLeft:'auto', marginRight:'auto'}}>
                            
                        </img>
                        
                    </a>
                </div>)}
            </Slider>
        </div>
    );
}

export default SimpleSlider