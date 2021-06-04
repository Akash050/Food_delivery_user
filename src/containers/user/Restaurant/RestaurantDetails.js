import React, { useEffect, useState } from 'react';
import Background from '../../../img/hero_general.jpg'
import { useHistory } from 'react-router-dom';
import { MenuItemByVendor } from '../../../redux/actions/menuItemAction';
import swal from "sweetalert";
import Loading from "react-fullscreen-loading";
import { useDispatch, useSelector } from 'react-redux';
import { cartByUser, removeCart, updateCart, addCart } from '../../../redux/actions/cartAction';
const RestaurantDetails = (props) => {
    let data = props.location.state.data
    const [vendorId, setVendorId] = useState(data._id);
    const [isLoding, setIsLoading] = useState(false);
    const [showCart, setShowCart] = useState(false)
    const [itemCount, setItemCount] = useState(0)
    const [cartDetails, setCartDetails] = useState({
    })
    let dispatch = useDispatch();

    let history = useHistory();
    const { menuItems } = useSelector((state) => ({
        menuItems: state.menuItems
    }));
    const { cart } = useSelector((state) => ({
        cart: state.cart,
    }));

    let getCart = async (flag) => {
        setIsLoading(true)
        let payload = {
            customerId: localStorage.id
        }
        let data = await dispatch(cartByUser(payload, false));
        if (data.success) {
           setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        setIsLoading(true)
        async function getMenuItems() {
            let param = {
                vendorId: vendorId
            }
            await dispatch(MenuItemByVendor(param));
            setIsLoading(false)
        }
        getCart(false)
        getMenuItems()
    }, []);
    useEffect(() => {
        // setIsLoading(true)
        if (cart.cart == undefined) {
            return
        }
        if (cart.cart) {
            const sum = cart.cart.items.map(element => element.quantity).reduce((a, b) => a + b, 0);
            setItemCount(sum)
            setCartDetails(cart.cart)
            setShowCart(true)
          //  setIsLoading(false)
        } else {
            setCartDetails({})
            setItemCount(0)
        }
    }, [cart])

    let onRemoveItem = async (item) => {
        let tempCart = cartDetails
        const findItem = tempCart.items.find(ele => ele.itemId == item.itemId);
        const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
        if (findItem.quantity > 1) {
            console.log('in 1st if')
            tempCart.items[findItemIndex].quantity = findItem.quantity - 1
            setCartDetails(tempCart)
            setIsLoading(true)
            let data = await dispatch(updateCart(tempCart));
            getCart(true)
        } else {
            if (tempCart.items.length > 1) {
                console.log('in if')
                const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
                const filterArray = tempCart.items.filter((element, index) => index != findItemIndex);
                tempCart.items = filterArray
                setIsLoading(true)
                let data = await dispatch(updateCart(tempCart));
                getCart(true)
            } else {
                console.log('in else')
                setIsLoading(true)
                let data = await dispatch(removeCart(tempCart._id));
                getCart(true)
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
            getCart(true)
        }
    }
    let checkout = (e) => {
        e.preventDefault()
        history.push('/cart')
    }

    let onDeleteItem = async (item) => {
        let tempCart = cartDetails
        if (tempCart.items.length > 1) {
            console.log("if tempCart", tempCart)
            console.log("if item", item)
            const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
            const filterArray = tempCart.items.filter((element, index) => index != findItemIndex);
            tempCart.items = filterArray
            setIsLoading(true)
            let data = await dispatch(updateCart(tempCart));
            getCart(true)
        } else {
            setIsLoading(true)
            let data = await dispatch(removeCart(tempCart._id));
            getCart(true)
        }
    }

    let onAddCartItem = async (value) => {
        if (localStorage.isLoggedIn == undefined) {
            props.history.push('/login')
            return
        }
        let payload = {
            customerId: localStorage.id
        }
        let data = await dispatch(cartByUser(payload, false));
        if (data.data) {
            let cartData = data.data
            if (cartData.vendor._id == value.vendorId) {
                setIsLoading(true)
                let cartData = data.data
                const findItemIndex = cartData.items.findIndex(ele => ele.itemId == value._id);
                if (findItemIndex > -1) {
                    cartData.items[findItemIndex].quantity = cartData.items[findItemIndex].quantity + 1
                    let data = await dispatch(updateCart(cartData, true));
                    let userpayload = {
                        customerId: localStorage.id
                    }
                    let userdata = await dispatch(cartByUser(userpayload, false));
                    setIsLoading(false)
                } else {
                    let temp = {
                        itemId: value._id,
                        quantity: 1
                    }
                    cartData.items.push(temp)
                    let data = await dispatch(updateCart(cartData, true));
                    let userpayload = {
                        customerId: localStorage.id
                    }
                    let userdata = await dispatch(cartByUser(userpayload, false));
                    setIsLoading(false)
                }
            } else {
                swal({
                    title: "Replace Cart Item?",
                    text: `Your cart contain dishes from  ${cartData.vendor.first_name}. Do you want to discard and add dishes from That?`,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then(async (willDelete) => {
                        if (willDelete) {
                            let data = await dispatch(removeCart(cartData._id))
                            if (data.success) {
                                setIsLoading(true)
                                let payload = {
                                    customerId: localStorage.id,
                                    vendorId: value.vendorId,
                                    items: [
                                        {
                                            itemId: value._id,
                                            quantity: 1,
                                        }
                                    ]
                                }
                                let data = await dispatch(addCart(payload, false));
                                let userpayload = {
                                    customerId: localStorage.id
                                }
                                let userdata = await dispatch(cartByUser(userpayload, false));
                                setIsLoading(false)
                            } else {
                                swal({
                                    title: "Error",
                                    text: data.message,
                                    icon: "error",
                                    button: 'ok'
                                });
                            }
                        } else {

                        }
                    });
            }
        } else {
            setIsLoading(true)
            let payload = {
                customerId: localStorage.id,
                vendorId: value.vendorId,
                items: [
                    {
                        itemId: value._id,
                        quantity: 1,
                    }
                ]
            }
            let data = await dispatch(addCart(payload, false));
            let userpayload = {
                customerId: localStorage.id
            }
            let userdata = await dispatch(cartByUser(userpayload, false));
            setIsLoading(false)
        }
    }

    return (
        <main>
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            <div className="hero_in detail_page background-image" style={{ backgroundImage: `url(${Background})` }}>
                <div className="wrapper opacity-mask" style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }} >

                    <div className="container">
                        <div className="main_info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="head">
                                        <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                                    </div>
                                    <h1>{data.first_name}</h1>
                                    {data.street} {data.area} {data.city} <a
                                        href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                                        target="blank">Get directions</a>
                                </div>
                                <div className="col-xl-8 col-lg-7 col-md-6">
                                    <div className="buttons clearfix">
                                        <span className="magnific-gallery">
                                            <a href="img/detail_1.jpg" className="btn_hero" title="Photo title"
                                                data-effect="mfp-zoom-in"><i className="icon_image"></i>View photos</a>
                                            <a href="img/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                            <a href="img/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                        </span>
                                        <a href="#0" className="btn_hero wishlist"><i className="icon_heart"></i>Wishlist</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <nav className="secondary_nav sticky_horizontal">
                <div className="container">
                    <ul id="secondary_nav">
                        <li><a className="list-group-item list-group-item-action" href="#section-1">Starters</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-2">Main Courses</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-3">Desserts</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-4">Drinks</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-5"><i
                            className="icon_chat_alt"></i>Reviews</a></li>
                    </ul>
                </div>
                <span></span>
            </nav>


            <div className="bg_gray">
                <div className="container margin_detail">
                    <div className="row">
                        <div className="col-lg-8 list_menu">
                            <section id="section-1">
                                <h4>Menu Items</h4>
                                <div className="row">
                                    {
                                        menuItems.map((val) => {
                                            return (
                                                <div className="col-md-6">

                                                    <a className="menu_item modal_dialog" >

                                                        <figure>

                                                            <img src={val.image}
                                                                data-src={val.image} alt="Item" className="lazy" />

                                                        </figure>
                                                        <figure>
                                                            <div onClick={() => onAddCartItem(val)} style={{ color: 'white', fontWeight: 'bold' }}><span className="addcart-item"><i className="icon_plus"></i></span></div>
                                                        </figure>
                                                        <h3>{val.item}</h3>
                                                        <p>{val.description}</p>
                                                        <h3>${val.price}</h3>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </section>
                        </div>


                        {
                            cartDetails.items != undefined ?
                                <div className="col-lg-4" id="sidebar_fixed">
                                    <div className="box_order mobile_fixed">
                                        <div className="head">
                                            <h3>Order Summary</h3>
                                        </div>

                                        <div className="main">
                                            <ul className="clearfix">
                                                {cartDetails.items.map(item => {
                                                    return (
                                                        // <>
                                                        //     <a className="close_panel_mobile" ><i className="icon_close"></i></a>

                                                        //     <li><a onClick={() => onRemoveItem(item)}><>{item.quantity}x {item.itemName} </>&nbsp;</a>
                                                        //         <p onClick={() => onAddItem(item)}></p>
                                                        //         <span>${item.unitPrice}<span className="remove--item-cart" onClick={() => onCross(item)}><i className="icon_close"></i></span></span></li>


                                                        // </>
                                                        <div className="addcart--menu">
                                                            <div className="cartItem--list-view">
                                                                <div className="iconadd-cart-product">
                                                                    <span onClick={() => onRemoveItem(item)} className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                                    <span className="scn--add commn--tt-p">{item.quantity}</span>
                                                                    <span onClick={() => onAddItem(item)}  className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
                                                                </div>
                                                                <div className="productTitel--cart">
                                                                    <p>{item.itemName}</p>
                                                                </div>
                                                                <div className="price--cart--tag summary-price">
                                                                    <span className="price--txt">${item.unitPrice}</span>
                                                                    <span onClick={() => onDeleteItem(item)} className="remove--item-cart"><i className="icon_close"></i></span>
                                                                </div>
                                                                {/* <div className="croscart--page">
                                                            <span onClick={() => onDeleteItem(item)} className="remove--item-cart"><i className="icon_close"></i></span>
                                                        </div> */}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                }
                                            </ul>
                                            <hr></hr>
                                            <ul className="clearfix">
                                                <li>Total Price<span>${cartDetails.totalPrice}</span></li>
                                                <li>Discount<span>${cartDetails.discountValue}</span></li>
                                                <li className="total">Grand Total<span>${cartDetails.grandTotal}</span></li>
                                            </ul>
                                            <div className="btn_1_mobile">
                                                <div className="btn_1 gradient full-width mb_5" onClick={(e) => checkout(e)}>Continue to checkout</div>
                                                <div className="text-center"><small>No money charged on this steps</small></div>
                                            </div>
                                            {/* <div className="row opt_order">
                                                <div className="col-6">
                                                    <label className="container_radio">Delivery
                                                    <input type="radio" value="option1" name="opt_order" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-6">
                                                    <label className="container_radio">Take away
                                                    <input type="radio" value="option1" name="opt_order" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                : <div className="col-lg-4" id="sidebar_fixed">
                                    <div className="box_order mobile_fixed">
                                        <div className="head">

                                            <h3>Order Summary</h3>
                                            <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                        </div>
                                        {/* <div className={`cartbox--view dropdown-menu ${showCart ? 'showCart' : null} `} id="myDropdown"> */}

                                        <div className="main empty-cart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                            <p className="empty-cart-text"><strong>You have no items in your cart</strong> </p>
                                        </div>
                                        <a

                                            className="btn_1 text-white gradient full-width mb_5">Add items to cart</a>
                                        {/* <div className="main-item-total">
                                                    <div className="total--item-cart"><span className="tt-name-left">Total Price</span><span className="tt-amt-right">${cartDetails.totalPrice}</span></div>
                                                    <div className="total--item-cart"><span className="tt-name-left">Discount</span><span className="tt-amt-right">${cartDetails.discountValue}</span></div>
                                                    <div className="total--item-cart total--amount"><span className="tt-name-left">Grand Total</span><span className="tt-amt-right">${cartDetails.grandTotal}</span></div>
                                                </div> */}
                                        <div className="btn_1_mobile mt-4">

                                        </div>
                                    </div>
                                </div>


                        }
                    </div>

                    <div className="btn_reserve_fixed"><a href="#0" className="btn_1 gradient full-width">View Basket</a>
                    </div>
                </div>
            </div>



            <div className="container margin_30_20">
                <div className="row">
                    <div className="col-lg-8 list_menu">
                        <section id="section-5">
                            <h4>Reviews</h4>
                            <div className="row add_bottom_30 d-flex align-items-center reviews">
                                <div className="col-md-3">
                                    <div id="review_summary">
                                        <strong>8.5</strong>
                                        <em>Superb</em>
                                        <small>Based on 4 reviews</small>
                                    </div>
                                </div>
                                <div className="col-md-9 reviews_sum_details">
                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <h6>Food Quality</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 90%"
                                                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>9.0</strong></div>
                                            </div>

                                            <h6>Service</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 95%"
                                                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>9.5</strong></div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <h6>Punctuality</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 60%"
                                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>6.0</strong></div>
                                            </div>

                                            <h6>Price</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 60%"
                                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>6.0</strong></div>
                                            </div>

                                        </div>
                                    </div> */}

                                </div>
                            </div>

                            <div id="reviews">
                                <div className="review_card">
                                    <div className="row">
                                        <div className="col-md-2 user_info">
                                            <figure><img src="img/avatar4.jpg" alt="" /></figure>
                                            <h5>Lukas</h5>
                                        </div>
                                        <div className="col-md-10 review_content">
                                            <div className="clearfix add_bottom_15">
                                                <span className="rating">8.5<small>/10</small> <strong>Rating
													average</strong></span>
                                                <em>Published 54 minutes ago</em>
                                            </div>
                                            <h4>"Great Location!!"</h4>
                                            <p>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea.
                                            Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere
                                            fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer
											petentium cu his. Tollit molestie suscipiantur his et.</p>
                                            <ul>
                                                <li><a href="#0"><i className="icon_like"></i><span>Useful</span></a></li>
                                                <li><a href="#0"><i className="icon_dislike"></i><span>Not useful</span></a>
                                                </li>
                                                <li><a href="#0"><i className="arrow_back"></i> <span>Reply</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="review_card">
                                    <div className="row">
                                        <div className="col-md-2 user_info">
                                            <figure><img src="img/avatar1.jpg" alt="" /></figure>
                                            <h5>Marika</h5>
                                        </div>
                                        <div className="col-md-10 review_content">
                                            <div className="clearfix add_bottom_15">
                                                <span className="rating">9.0<small>/10</small> <strong>Rating
													average</strong></span>
                                                <em>Published 11 Oct. 2019</em>
                                            </div>
                                            <h4>"Really great dinner!!"</h4>
                                            <p>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea.
                                            Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere
                                            fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer
											petentium cu his. Tollit molestie suscipiantur his et.</p>
                                            <ul>
                                                <li><a href="#0"><i className="icon_like"></i><span>Useful</span></a></li>
                                                <li><a href="#0"><i className="icon_dislike"></i><span>Not useful</span></a>
                                                </li>
                                                <li><a href="#0"><i className="arrow_back"></i> <span>Reply</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row reply">
                                        <div className="col-md-2 user_info">
                                            <figure><img src="img/avatar.jpg" alt="" /></figure>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="review_content">
                                                <strong>Reply from Foogra</strong>
                                                <em>Published 3 minutes ago</em>
                                                <p><br></br>Hi Monika,<br></br><br></br>Eos tollit ancillae ea, lorem consulatu qui ne, eu
                                            eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                                            veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent
                                            fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his
												et.<br></br><br></br>Thanks</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="text-right"><div className="btn_1 gradient" onClick={() => history.push('/LeaveReview')}>Leave a Review</div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>);
}

export default RestaurantDetails;