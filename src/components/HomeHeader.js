import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo_sticky.svg'
import { useGoogleLogout } from 'react-google-login'

const HomeHeader = () => {
    const [scroll, setScroll] = useState(false)
    const GOOGLE_CLIENT_ID = "400865530457-pelm0k6er8vqgldvr7vetekf2rqnii0d.apps.googleusercontent.co"
    const onLogoutSuccess = () => {
        console.log('logout');
        document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        localStorage.clear();
        history.push('/login')
    };
    const onFailure = () => {
        console.log('logout fail');
    };
    const { signOut } = useGoogleLogout({
        clientId: GOOGLE_CLIENT_ID,
        onLogoutSuccess: onLogoutSuccess,
        onFailure: onFailure,
    });
    let history = useHistory();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])


    const logOut = () => {
        localStorage.clear();
        history.push('/login')
    }


    const responseGoogle = (response) => {
        console.log(response);
    }
    console.log("local ->", localStorage)
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
                    {/* <i className="icon_menu"></i><span>Menu</span> */}
                    {/* <li><a href="" id="sign-in" className="login" onClick={() => signOut()}></a></li> */}
                    {/* <li><a href="" id="sign-in" className="login" style={{ content: "\f08c" }} onClick={() => signOut()}></a></li> */}
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
                            <a href="" className="show-submenu">Home</a>

                        </li>
                        <li className="submenu">
                            <a href="" className="show-submenu">Listing</a>

                        </li>
                        <li className="submenu">
                            <a href="" className="show-submenu">Shopping Cart</a>

                        </li>
                        <li><a href="">All Orders</a></li>
                        {localStorage.isLoggedIn ? <li onClick={() => signOut()}>
                            LogOut
                        </li> :
                            <li onClick={() => logOut()}><a href="">Login</a></li>}


                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HomeHeader;