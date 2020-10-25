import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false)

    const clickHandler = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}  >
                    Osas
                </Link>
                <div className="menu-icon" onClick={clickHandler} >              
                    {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars"/>}
                </div>
    
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu} >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu} >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="//github.com/OsasAzamegbe"
                        target="_blank" className="nav-links" onClick={closeMobileMenu} >
                            Github
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu} >
                            Contact
                        </Link>
                    </li>
                </ul>


            </div>
        </nav>

    )
}

export default Navbar