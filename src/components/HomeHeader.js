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
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/order')
    }
    return (
        <header className={scroll ? "header black_nav clearfix element_to_stick sticky" : "header_in clearfix"} >
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
                        <a href=""><img src="img/logo.svg" width="162" height="35" alt="" /></a>
                    </div>
                    <ul id="top_menu">
                        <li className="submenu">
                            <a href="" className="show-submenu">Home</a>

                        </li>
                        <li className="submenu">
                            <a href="" className="show-submenu">Listing</a>

                        </li>
                        <li className="submenu" onClick={(e) => handleClick(e)}>
                            <a href="" className="show-submenu">Shopping Cart</a>
                        </li>
                        <li><a href="">All Orders</a></li>
                        
                        <li className="dropdowncart">
                            <div className="cart-icon-view">
                                <span className="cart-icon"><i className="icon_cart"></i></span>
                                <span className="cart-bagets">02</span>
                            </div>
                            <div className="cartbox--view dropdown-menu" id="myDropdown">
                                <div className="box_order mobile_fixed">
                                    <div className="head">
                                        <h3>Mariana's Kitchen</h3>
                                        <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                    </div>
                                    
                                    <div className="main-cart-box">
                                        <div className="addcart--menu">
                                            <div className="cartItem--list-view">
                                                <div className="iconadd-cart-product">
                                                    <span className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                    <span className="scn--add commn--tt-p">2</span>
                                                    <span className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
                                                </div>
                                                <div className="productTitel--cart">
                                                    <p>Egyptian Fatteh with Meat - Tasbera</p>
                                                </div>
                                                <div className="price--cart--tag">
                                                    <span className="price--txt">$20</span>
                                                </div>
                                                <div className="croscart--page">
                                                    <span className="remove--item-cart"><i className="icon_close"></i></span>
                                                </div>
                                            </div>
                                            <div className="cartItem--list-view">
                                                <div className="iconadd-cart-product">
                                                    <span className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                    <span className="scn--add commn--tt-p">2</span>
                                                    <span className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
                                                </div>
                                                <div className="productTitel--cart">
                                                    <p>Egyptian Fatteh with Meat - Tasbera</p>
                                                </div>
                                                <div className="price--cart--tag">
                                                    <span className="price--txt">$20</span>
                                                </div>
                                                <div className="croscart--page">
                                                    <span className="remove--item-cart"><i className="icon_close"></i></span>
                                                </div>
                                            </div>
                                            <div className="cartItem--list-view">
                                                <div className="iconadd-cart-product">
                                                    <span className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                    <span className="scn--add commn--tt-p">2</span>
                                                    <span className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
                                                </div>
                                                <div className="productTitel--cart">
                                                    <p>Egyptian Fatteh with Meat - Tasbera</p>
                                                </div>
                                                <div className="price--cart--tag">
                                                    <span className="price--txt">$20</span>
                                                </div>
                                                <div className="croscart--page">
                                                    <span className="remove--item-cart"><i className="icon_close"></i></span>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="main-item-total">
                                            <div className="total--item-cart"><span className="tt-name-left">Total Price</span><span className="tt-amt-right">$56</span></div>
                                            <div className="total--item-cart"><span className="tt-name-left">Discount</span><span className="tt-amt-right">$10</span></div>
                                            <div className="total--item-cart total--amount"><span className="tt-name-left">Grand Total</span><span className="tt-amt-right">$66</span></div>
                                        </div>
                                        <div className="btn_1_mobile mt-4">
                                            <a href="order.html" className="btn_1 text-white gradient full-width mb_5">Continue to Checkout</a>
                                        </div>
                                    </div>
                                </div>  
                            </div>                            
                        </li>
                        <li><a href="" className="login login-icon">Loin</a></li>
                        
                        
                            

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HomeHeader;