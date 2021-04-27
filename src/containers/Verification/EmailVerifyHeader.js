import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../img/logo_sticky.svg'
const EmailVerifyHeader = () => {
    const [scroll, setScroll] = useState(false)
    let history = useHistory();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])
    const signOut = () => {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <header className={scroll ? "header black_nav clearfix element_to_stick sticky" : "header black_nav clearfix element_to_stick sticky"} >
            <div className="container">
                <div id="logo">
                    <a href="index.html">
                        <img src={logo} width="162" height="35" alt="" />
                    </a>
                </div>

            </div>
        </header>
    );
}

export default EmailVerifyHeader;