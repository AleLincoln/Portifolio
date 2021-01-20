import React from 'react';
import styled from 'styled-components';


const FooterArea = styled.footer`
   display:flex;
    justify-content:space-between;
    background-color: #000;
    color:white;
    padding: 10px;
    margin: 60px 0 0 0;
`

const Ul = styled.ul`
    display:flex;
    margin:20px
`

const Li = styled.li`

    list-style:none;
    margin:0 5px 0 5px;

    &:hover{
        color:#0da881;
        transition:0.5s;
    }
    
`
const Link = styled.a`
    text-decoration:none;
    font-size: 20px;
    

`
const P = styled.p`
    margin: 0 0 0 0;
    font-size: 20px;
    margin:20px

`

let socialMedia = [
    {'RedeSocial': 'LinkedIn',
     'Ref': 'https://www.linkedin.com/in/lincoln-alexandrino/',
     'icon': <i class="fab fa-linkedin-in"></i>
    },
    {'RedeSocial': 'GitHub',
     'Ref': 'https://github.com/AleLincoln/',
     'icon': <i class="fab fa-github"></i>
    },
    {'RedeSocial': 'Instagram',
     'Ref': 'http://instagram.com/ale_lincoln',
     'icon': <i class="fab fa-instagram"></i>  
    }
]

const listingSocialMedia = socialMedia.map((item) => {
    return (
    <Li>
        <Link href={item.Ref}>{item.icon}</Link>
    </Li>
    )
})

function Footer(){
    


    return (
        <FooterArea>
            <P>AleLincoln - All rights reserved.</P>

            <Ul>{listingSocialMedia}</Ul>


        </FooterArea>


        
    )
}

export default Footer;