import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../Image/logo.svg'; 
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
    const { loggedInUser, logoutUser } = useAuth();

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    function activeToggle(){
        document.getElementById('toggle-btn').classList.toggle('active');
        document.getElementById('mobile-nav').classList.toggle('active');
    }

    //login modal
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <header className={scroll ? "header-sticky" : "header"}>
                <div className="container">
                        <nav className="navbarItems">
                            <Link to="/" className="navbar-logo">
                                <img src={logo} width="80%" className="d-inline-block align-top" alt="logo"/>
                            </Link>

                             <div className="menu-icon" id="toggle-btn" onClick={activeToggle}>
                                <svg width="50" height="50" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </div>
                            <div className="nav-menu" id="mobile-nav">
                                <Link to="/" className="pr-4 active nav-links nav-top-mt" onClick={activeToggle}>Home</Link>
                                <Link to="/outlets" className="pr-4 nav-links" onClick={activeToggle}>Outlets</Link>
                                <Link to="/about" className="pr-4 nav-links" onClick={activeToggle}>About Us</Link>
                                <Link to="/contact" className="pr-4 nav-links" onClick={activeToggle}>Contact Us</Link>
                                
                                {
                                loggedInUser.isSignedIn ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                            <span className="avatar profile-pic mr-2">
                                                <img alt={loggedInUser.name} src={loggedInUser.photo}/>
                                            </span>
                                            <span className="mb-0">{loggedInUser.name}</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Link to="/profile" className="dropdown-item reg-16">Profile</Link>
                                            <Link to="/" className="dropdown-item reg-16" onClick={logoutUser}>Sign Out</Link>
                                        </Dropdown.Menu>
                                    </Dropdown> : 
                                    <Button className="px-4" onClick={openModal}>
                                        Login
                                    </Button>
                                }
                            </div>
                        </nav>
                </div>
            </header> 
            <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal}></LoginModal>
        </>
    );
};

export default Header;