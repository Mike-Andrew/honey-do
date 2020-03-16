import React from 'react'
import {Link} from 'react-router-dom';

export function Header() {
    return (
        <header style={headerStyle}>
            <h1>Honey-Do's</h1>
            <Link style={linkStyle} to="/honey-do/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#55a',
    fontFamily: 'cursive',
    fontSize: 'xx-large',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer'
}

export default Header;
