import React, { useState } from 'react';
//import { Link } from 'react-router-dom'
import './style.css'
import Logo from './../../assets/img/Logo.png'
import { Link } from 'react-scroll'


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const menuItens = ['About me', 'Projects', 'Skills', 'Contacts']

    return (
        <>
            <nav className="navbar">
                <Link to='mainSection'  
                    activeClass= 'active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} className="navbar-logo"><img src={Logo} id='logoImg' alt='Logo'></img> AleLincoln</Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </nav>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {menuItens.sort().map((item, index) => {
                    return (

                        <li className='nav-item' key={`nav-item${index}`}>

                            <Link to={item}
                                activeClass= 'active'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='nav-links'
                                onClick={handleClick} >{item}</Link>

                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default Navbar