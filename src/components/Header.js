import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='header'>
            <h1>WinterHack Project</h1>
            <a href="https://github.com/Qwek-alt/WinterHack" target="_blank"><FaGithub size={40}/></a>
        </header>
    )
}

export default Header
