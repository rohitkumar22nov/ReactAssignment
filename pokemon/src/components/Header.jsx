import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>

                <Link to="/searchpokemon">
                    <li>SearchPokemon</li>
                </Link>
            </ul>

        </div>
    )
}

export default Header
