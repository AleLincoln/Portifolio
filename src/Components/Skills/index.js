import React from 'react'
import {FaReact, FaCss3Alt, FaHtml5, FaSass} from 'react-icons/fa'
import {SiTypescript, SiJavascript} from 'react-icons/si'
import {DiJqueryLogo, DiGithubBadge, DiNpm, DiVisualstudio, DiPython, DiPhotoshop, DiBrackets, DiPhp, DiWordpress} from 'react-icons/di'
import styled from 'styled-components'

const IconsArea = styled.div`
    color:#00C86F;
    display:flex;
    align-items:center;
    justify-content:center;

    & .icon{
        font-size: 2em;
    }

`

function Skills(){

   
    return (
        <IconsArea>
        
        <FaReact className='icon'/>
        <FaSass className='icon'/>
        <SiJavascript className='icon'/>
        <DiJqueryLogo className='icon'/>
        <FaCss3Alt className='icon'/>
        <FaHtml5 className='icon'/>
        <DiWordpress className='icon'/>
        <SiTypescript className='icon'/>
        <DiGithubBadge className='icon'/>
        <DiNpm className='icon'/>
        <DiVisualstudio className='icon'/>
        <DiPython className='icon'/>
        <DiPhotoshop className='icon'/>
        <DiBrackets className='icon'/>
        <DiPhp className='icon'/>
        
        </IconsArea>
    )
}

export default Skills
