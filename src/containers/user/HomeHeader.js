import React, { useState, useEffect } from 'react';
import logo from '../../img/logo_sticky.svg'
const HomeHeader = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])
    return (
        <header className={scroll ? "header black_nav clearfix element_to_stick sticky" : "header black_nav clearfix element_to_stick sticky"} >
            <div className="container">
                <div id="logo">
                    <a href="index.html">
                        <img src={logo} width="162" height="35" alt="" />
                    </a>
                </div>
                <div className="layer"></div>
                <ul id="top_menu">
                    <li><a href="#sign-in-dialog" id="sign-in" className="login">Sign In</a></li>
                    <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
                </ul>

                <a href="#0" className="open_close">
                    <i className="icon_menu"></i><span>Menu</span>
                </a>
                <nav className="main-menu">
                    <div id="header_menu">
                        <a href="#0" className="open_close">
                            <i className="icon_close"></i><span>Menu</span>
                        </a>
                        <a href="index.html"><img src="img/logo.svg" width="162" height="35" alt="" /></a>
                    </div>
                    <ul>
                        <li className="submenu">
                            <a href="#0" className="show-submenu">Home</a>
                           
                        </li>
                        <li className="submenu">
                            <a href="#0" className="show-submenu">Listing</a>
                           
                        </li>
                        <li className="submenu">
                            <a href="#0" className="show-submenu">Shopping Cart</a>
                          
                        </li>
                        <li><a href="#0">All Orders</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HomeHeader;