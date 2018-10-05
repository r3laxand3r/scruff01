import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/snuffle.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo2} alt="" /></span>
        <Link to="/">
        <h1>Snuffle</h1>
        </Link>
        <p>Short description about us. </p>
    </header>
)

export default Header
