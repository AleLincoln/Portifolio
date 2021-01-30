import React from 'react';
import Styled from 'styled-components'


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
font-size: 0.8em;
margin:20px

`

function SocialMedia = () => {

    let sm = [
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

    const listingSocialMedia = sm.map((item) => {
    return (
    <Li>
        <Link href={item.Ref} target="_blank">{item.icon}</Link>
    </Li>
    )
    })

}


export default SocialMedia