import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Loading from "react-fullscreen-loading";
import logo from '../img/logo_sticky.svg'
import { useGoogleLogout } from 'react-google-login'
import { cartByUser, updateCart, removeCart , handleCart} from "../redux/actions/cartAction";

const HomeHeader = () => {
    const dispatch = useDispatch();

    const [scroll, setScroll] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [itemCount, setItemCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [cartDetails, setCartDetails] = useState({

    })
    const { cart } = useSelector((state) => ({
        cart: state.cart,
    }));

    useEffect(() => {
        getCart()
    }, [])

    let getCart = async () => {
        setIsLoading(true)
        let payload = {
            customerId: localStorage.id
        }
        let data = await dispatch(cartByUser(payload));
        if (data.success) {
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }

    useEffect(() => {
      if(cart.cart == undefined){
          return
      }
      if (cart.cart) {
        const sum = cart.cart.items.map(element => element.quantity).reduce((a, b) => a + b, 0);
        setItemCount(sum)
        setCartDetails(cart.cart)
        setShowCart(cart.isOpen)
      }else{
        setCartDetails({})
        setItemCount(0)
      }
    }, [cart])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])

    const GOOGLE_CLIENT_ID = "400865530457-pelm0k6er8vqgldvr7vetekf2rqnii0d.apps.googleusercontent.co"
    const onLogoutSuccess = () => {
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

    const logOut = (e) => {
        e.preventDefault()
        localStorage.clear();
        history.push('/login')
    }

    const onCartClick = () => {
        setShowCart(!showCart)
    }

    const responseGoogle = (response) => {
        console.log(response);
    }
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/order')
    }
    let checkout = (e) => {
        e.preventDefault()
        history.push('/cart')
    }
    let onRemoveItem = async (item) => {
        let tempCart = cartDetails
        const findItem = tempCart.items.find(ele => ele.itemId == item.itemId);
        const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
        if (findItem.quantity > 1) {
            tempCart.items[findItemIndex].quantity = findItem.quantity - 1
            setCartDetails(tempCart)
            setIsLoading(true)
            let data = await dispatch(updateCart(tempCart));
            getCart()
        } else {
            if (tempCart.items.length > 1) {
                const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
                const filterArray = tempCart.items.filter((element, index) => index != findItemIndex);
                tempCart.items = filterArray
                setIsLoading(true)
                let data = await dispatch(updateCart(tempCart));
                getCart()
            } else {
                setIsLoading(true)
                let data = await dispatch(removeCart(tempCart._id));
                getCart()
            }
        }
    }

    let onAddItem = async (item) => {
        let tempCart = cartDetails
        const findItem = tempCart.items.find(ele => ele.itemId == item.itemId);
        const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
        if (findItem.quantity < 4) {
            tempCart.items[findItemIndex].quantity = findItem.quantity + 1
            setCartDetails(tempCart)
            setIsLoading(true)
            let data = await dispatch(updateCart(tempCart));
            getCart()
        }
    }

    let onCartClose = async (e) =>{
        e.preventDefault()
        setShowCart(false)
        await dispatch(handleCart(true));
        getCart()
    }
    console.log("jhdsfbhjfca", cart)
    return (
        <>
            {isLoading ? <Loading loading loaderColor="#3498db" /> : null}
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
                                    <span onClick={onCartClick} className="cart-icon"><i className="icon_cart"></i></span>
                                    <span className="cart-bagets">{itemCount}</span>
                                </div>
                                {
                                    cartDetails.items != undefined ?
                                        <div className={`cartbox--view dropdown-menu ${showCart ? 'showCart' : null} `} id="myDropdown">
                                            <div className="box_order mobile_fixed">
                                                <div className="head">
                                                    <h3>{cartDetails.vendor.first_name}'s Kitchen</h3>
                                                    <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                                </div>

                                                <div className="main-cart-box">
                                                    {
                                                        cartDetails.items.map(item => {
                                                            return (
                                                                <div className="addcart--menu">
                                                                    <div className="cartItem--list-view">
                                                                        <div className="iconadd-cart-product">
                                                                            <span onClick={() => onRemoveItem(item)} className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                                            <span className="scn--add commn--tt-p">{item.quantity}</span>
                                                                            <span onClick={() => onAddItem(item)} c className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
                                                                        </div>
                                                                        <div className="productTitel--cart">
                                                                            <p>{item.itemName}</p>
                                                                        </div>
                                                                        <div className="price--cart--tag">
                                                                            <span className="price--txt">${item.unitPrice}</span>
                                                                        </div>
                                                                        <div className="croscart--page">
                                                                            <span className="remove--item-cart"><i className="icon_close"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <hr></hr>
                                                    <div className="main-item-total">
                                                        <div className="total--item-cart"><span className="tt-name-left">Total Price</span><span className="tt-amt-right">${cartDetails.totalPrice}</span></div>
                                                        <div className="total--item-cart"><span className="tt-name-left">Discount</span><span className="tt-amt-right">${cartDetails.discountValue}</span></div>
                                                        <div className="total--item-cart total--amount"><span className="tt-name-left">Grand Total</span><span className="tt-amt-right">${cartDetails.grandTotal}</span></div>
                                                    </div>
                                                    <div className="btn_1_mobile mt-4">
                                                        <a onClick={(e) => checkout(e)} href="" className="btn_1 text-white gradient full-width mb_5">Continue to Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className={`cartbox--view dropdown-menu ${showCart ? 'showCart' : null} `} id="myDropdown">
                                            <div className="box_order mobile_fixed">
                                                <div className="head">
                                                    <h3>Your Cart</h3>
                                                    <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                                </div>

                                                <div className="main-cart-box">
                                                    <div className="empty-cart">
                                                        <svg  xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                        </svg>
                                                        <p className = "empty-cart-text"><strong>You have no items in your cart</strong> </p>
                                                    </div>
                                                    <hr></hr>
                                                    {/* <div className="main-item-total">
                                                    <div className="total--item-cart"><span className="tt-name-left">Total Price</span><span className="tt-amt-right">${cartDetails.totalPrice}</span></div>
                                                    <div className="total--item-cart"><span className="tt-name-left">Discount</span><span className="tt-amt-right">${cartDetails.discountValue}</span></div>
                                                    <div className="total--item-cart total--amount"><span className="tt-name-left">Grand Total</span><span className="tt-amt-right">${cartDetails.grandTotal}</span></div>
                                                </div> */}
                                                    <div className="btn_1_mobile mt-4">
                                                        <a onClick={(e) => onCartClose(e)} href="" className="btn_1 text-white gradient full-width mb_5">Close</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </li>
                            <li onClick={(e) => logOut(e)}><a href="" className="login login-icon">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default HomeHeader;