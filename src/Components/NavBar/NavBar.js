import React from 'react'
import "./NavBar.css"
import {BrowserRouter as Router, Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <Link className='loginLink' to="/login">
                <button  className='avatar'>Sign In</button>
            </Link>
        </div>
    )
}

export default NavBar
