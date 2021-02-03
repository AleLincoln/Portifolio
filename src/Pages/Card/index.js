import React, {useEffect} from 'react'
import styled from 'styled-components'
import IntroImg from '../../assets/img/IntroImg.jpg'
import Logo from '../../assets/img/Logo.png'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Bakcground = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    height:100vh;
    flex-direction:column;
    
`
const ProfileCard = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    padding:1em;
    flex-direction:column;
    border: 2px solid #00C86F;
    border-radius:0.5em;
    
`

const CardHeader = styled.div`

    & div{
        display: inline-block;
        padding:8px;
        background: linear-gradient(130deg, #fff, #00C86F, #283d3b, #008148);
        margin:auto;
        border-radius:50%;
        background-size:200% 200%;
        animation:animated-gradient 2s linear infinite
       

    }
    @keyframes animated-gradient{
            25%{
                background-position: left bottom;
            }
            50%{
                background-position: right bottom;
            }
            75%{
                background-position: right top;
            }
            100%{
                background-position: left top;
            }
        }

    & img{
        display:inline-block;
        width:10em;
        border-radius:50%;
    }

    & h1{
        font-size:1.5em;
    }


`

const SocialMediaItens = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#00C86F;
    font-size:30px;

    & a{
        margin:10px;
    }

    & img{
        margin:0;
        padding:0;
        width:60px;
    }

    & a:hover{
        color:#fff;
        transition:0.5s linear;
    }

`


function Card(){
    useEffect(() =>{
        Aos.init({duration:1000})
      }, [])

    return (
        <Bakcground>

        <ProfileCard data-aos='fadeIn'>
            <CardHeader>
                <div>
                    <img src={IntroImg} alt='Lincoln'></img>

                </div>
                
                <h1>
                    Lincoln Alexandrino
                </h1>
                <p>Front-end Developer</p>
            </CardHeader>
            <SocialMediaItens>
                <Link to="/" ><img src={Logo} alt='Logo'></img></Link>
                <a href="https://www.linkedin.com/in/lincoln-alexandrino/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
                <a href="https://github.com/AleLincoln/" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://www.instagram.com/ale_lincoln/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href="mailto:lincoln_alexandrino@hotmail.com" ><AiOutlineMail/></a>
            </SocialMediaItens>

        </ProfileCard>
        
        
        
        </Bakcground>
    )
}

export default Card