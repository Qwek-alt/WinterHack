import React from 'react'
import { FaGithub, FaBomb, FaRegQuestionCircle } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='header'>
            {/* <a><FaRegQuestionCircle className="header-btn" size={40} /></a> */}
            <a><FaBomb className="header-btn" size={40} /></a>
            
            <a href="https://github.com/Qwek-alt/WinterHack" target="_blank"><FaGithub className="header-btn" size={40}/></a>
        </header>
    )
}

export default Header
