import React from 'react'
import logo from '../assets/logo2.webp';
import { Link } from 'react-router-dom';

function Header() {


    return (
        <div>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h1>Foodies Paradise</h1>
                </div>
                <div className='nav-left'>
                    <ul>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/recipes'><li>Recipes</li></Link>
                        <Link to='/about'><li>About us</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>

                    </ul>

                </div>
            </nav>


        </div>


    )
}

export default Header
