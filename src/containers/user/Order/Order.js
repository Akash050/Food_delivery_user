import React, { useState, useEffect } from 'react';
import cities from '../../../components/ma.json'
import { Checkmark } from 'react-checkmark'
import { useDispatch, useSelector } from "react-redux";
import Loading from "react-fullscreen-loading";
import emptyImg from '../../../img/empty-img.png'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from 'react-router-dom';
import { cartByUser, removeCart, updateCart, addCart } from '../../../redux/actions/cartAction';
import { createOrder } from '../../../redux/actions/orderAction';

const Order = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const [cityOptions, setCityOptions] = useState(cities);
    const [itemCount, setItemCount] = useState(0)
    const [isLoding, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [orderConfirmation, setOrderConfirmation] = useState(false)
    const [cartDetails, setCartDetails] = useState({
    })
    const { cart } = useSelector((state) => ({
        cart: state.cart,
    }));

    let getCart = async (flag) => {
        setIsLoading(true)
        let payload = {
            customerId: localStorage.id
        }
        let data = await dispatch(cartByUser(payload, false));
        console.log("data", data)
        if (data.success) {
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }
    useEffect(async () => {
        //  setIsLoading(true)
        let payload = {
            customerId: localStorage.id
        }
        let data = await dispatch(cartByUser(payload, false));
        // if (data.success) {
        //     if (data.data) {
        //         setItemCount(data.data.items.length)
        //         setCartDetails(data.data)
        //     }
        // }
        setIsLoading(false)
    }, [])

    useEffect(async () => {
        if (cart.cart) {
            console.log("cardt chanhe", cart.cart)
            setCartDetails(cart.cart)
        } else {
            setCartDetails({})
        }
    }, [cart])

    // const [items, setItems] = useState([])
    // const { cartItems } = useSelector((state) => ({
    //     cartItems: state.cart
    // }));
    // const [totalCount, setTotalCount] = useState([])
    // useEffect(() => {
    //     let counter = {}
    //     cartItems.forEach(function (obj) {
    //         var key = JSON.stringify(obj)
    //         counter[key] = (counter[key] || 0) + 1
    //     })
    //     console.log(counter)
    //     setTotalCount(counter)
    // }, []);
    // console.log(totalCount, 'tor')
    // console.log(cartItems)
<<<<<<< HEAD
    console.log("cartDetails", cartDetails)
    return (
        <>
<<<<<<< HEAD
         {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
        <main class="bg_gray">
=======
         {isLoding ? <Loading loading loaderColor="#3498DB" /> : null}
        <main class="bg_gray d-none">
>>>>>>> 2a692e35283723f5758d61bd5478781f7b164f81
            <div class="container margin_60_20">
                {/* <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="box_order_form">
                            <div class="head text-center">
                                <h3>Pizzeria da Alfredo</h3>
                            27 Old Gloucester St, 4530 - <a href="" target="blank">Get directions</a>
                            </div>
                            <div class="main">
                                <div id="confirm">
                                    <div class="icon icon--order-success svg add_bottom_15">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72}>
                                            <g fill="none" stroke="#8EC343" strokeWidth={2}>
                                                <circle cx={36} cy={36} r={35} style={{ strokeDasharray: '240px, 240px', strokeDashoffset: 480 }} />
                                                <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: '50px, 50px', strokeDashoffset: 0 }} />
                                            </g>
                                        </svg>
                                    </div>
                                    <h3>Order Confirmed!</h3>
                                    <p>Sit an meis aliquam, cetero inermis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {
                cartDetails.items != undefined ?
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
=======
    let onAddItem = async (item) => {
        let tempCart = cartDetails
        const findItem = tempCart.items.find(ele => ele.itemId == item.itemId);
        const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
        if (findItem.quantity < 4) {
            tempCart.items[findItemIndex].quantity = findItem.quantity + 1
            setCartDetails(tempCart)
            setIsLoading(true)
            let data = await dispatch(updateCart(tempCart));
            getCart(false)
        }
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
            getCart(false)
        } else {
            if (tempCart.items.length > 1) {
                const findItemIndex = tempCart.items.findIndex(ele => ele.itemId == item.itemId);
                const filterArray = tempCart.items.filter((element, index) => index != findItemIndex);
                tempCart.items = filterArray
                setIsLoading(true)
                let data = await dispatch(updateCart(tempCart));
                getCart(true)
            } else {
                setIsLoading(true)
                let data = await dispatch(removeCart(tempCart._id));
                setCartDetails({})
                getCart(false)
                setIsLoading(false)
            }
        }
    }

    let handleCityChange = (e, value) => {
        if (value != null) {
            setCartDetails({
                ...cartDetails,
                city: value.city
            })
        }
    }
    let handleOnChange = (e, typ) => {
        if (typ == 'address') {
            setCartDetails({
                ...cartDetails,
                address: e.target.value

            });
        }
        if (typ == 'number') {
            setCartDetails({
                ...cartDetails, customer: {
                    ...cartDetails.customer,
                    phoneNumber: e.target.value
                }
            });
        }
        if (typ == 'email') {
            setCartDetails({
                ...cartDetails, customer: {
                    ...cartDetails.customer,
                    email: e.target.value
                }
            });
        }
        if (typ == 'firstname') {
            setCartDetails({
                ...cartDetails, customer: {
                    ...cartDetails.customer,
                    first_name: e.target.value
                }
            });
        }
        if (typ == 'lastname') {
            setCartDetails({
                ...cartDetails, customer: {
                    ...cartDetails.customer,
                    last_name: e.target.value
                }
            });
        }
        if (typ == 'zipcode') {
            setCartDetails({
                ...cartDetails, zipCode: e.target.value
            });
        }
    }

    let onSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        console.log("form.checkValidity()", form.checkValidity())
        if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

        } else {
            setIsLoading(true)
            let payload = {
                ...cartDetails,
                status: "Pending"
            }
            let data = await dispatch(createOrder(payload));
            if (data.success) {
                setIsLoading(false)
                setOrderConfirmation(true)
                let data = await dispatch(removeCart(payload._id));
                setCartDetails({})
                getCart(false)
                setIsLoading(false)
                setOrderConfirmation(true)
            } else {
                setIsLoading(false)
            }
        }
    }
    console.log("phone_number", cartDetails.city)
    return (
        <>
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            <main className="bg_gray"><div className="container margin_60_20">{
                orderConfirmation ?

                    <div className="row justify-content-center">
                        <div className="col-lg-4">
>>>>>>> tezi-dev
                            <div class="box_order_form">
                                <div class="head text-center">
                                    <h3>Pizzeria da Alfredo</h3>
                    27 Old Gloucester St, 4530 - <a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="blank">Get directions</a>
                                </div>
                                <div class="main">
                                    <div id="confirm">
                                        <div class="icon icon--order-success svg add_bottom_15">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                                                <g fill="none" stroke="#8EC343" stroke-width="2">
                                                    <circle cx="36" cy="36" r="35" style={{ strokeDasharray: "240px 240px", strokeDashoffset: "480px" }}></circle>
                                                    <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: "50px 50px", strokeDashoffset: "0px" }}></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <h3>Order Confirmed!</h3>
                                        {/* <p>Sit an meis aliquam, cetero inermis.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div class="col-xl-4 col-xl-4" id="sidebar_fixed">
                            <div className="box_order mobile_fixed">
                                <div className="head">
                                    <h3>Order Summary</h3>
                                    <div>{cartDetails.vendor.first_name}'s Kitchen</div>
                                    <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                </div>
                                <div className="main-cart-box">
                                    {
                                        cartDetails.items.map(item => {
                                            return (
                                                <div className="addcart--menu">
                                                    <div className="cartItem--list-view">
                                                        <div className="iconadd-cart-product">
                                                            <span className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                            <span className="scn--add commn--tt-p">{item.quantity}</span>
                                                            <span className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
=======
                    </div>

                    :
                    <>
                        {
                            cartDetails.items != undefined ?
                                <form className="main" noValidate validated={validated} onSubmit={onSubmit}>
                                    <div className="row justify-content-center">
                                        <div className="col-xl-6 col-lg-8">
                                            <div className="box_order_form">
                                                <div className="head">
                                                    <div className="title">
                                                        <h3>Personal Details</h3>
                                                    </div>
                                                </div>
                                                <div className="main" >
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>First Name *</label>
                                                                <input value={cartDetails.customer.first_name} onChange={(e) => handleOnChange(e, 'firstname')} className="form-control" required />
                                                            </div>
                                                            {validated && cartDetails.customer.first_name == '' ?
                                                                <div className="validation-error">
                                                                    Please enter First Name.
                                                            </div>
                                                                : null
                                                            }
>>>>>>> tezi-dev
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Last Name *</label>
                                                                <input value={cartDetails.customer.last_name} onChange={(e) => handleOnChange(e, 'lastname')} className="form-control" required />
                                                            </div>
                                                            {validated && cartDetails.customer.last_name == '' ?
                                                                <div className="validation-error">
                                                                    Please enter Last Name.
                                                            </div>
                                                                : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Email Address *</label>
                                                                <input value={cartDetails.customer.email} onChange={(e) => handleOnChange(e, 'email')} className="form-control" required />
                                                            </div>
                                                            {validated && cartDetails.customer.email == '' || cartDetails.customer.email == undefined ?
                                                                <div className="validation-error">
                                                                    Please enter Email Address.
                                                            </div>
                                                                : null
                                                            }
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Phone *</label>
                                                                <input value={cartDetails.customer.phoneNumber} onChange={(e) => handleOnChange(e, 'number')} className="form-control" required />
                                                            </div>
                                                            {validated && cartDetails.customer.phoneNumber == '' || cartDetails.customer.phoneNumber == undefined ?
                                                                <div className="validation-error">
                                                                    Please enter Phone Number.
                                                            </div>
                                                                : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Full Address *</label>
                                                        <input value={cartDetails.address} onChange={(e) => handleOnChange(e, 'address')} className="form-control" required />
                                                    </div>
                                                    {validated && cartDetails.address == '' || cartDetails.address == undefined ?
                                                        <div className="validation-error">
                                                            Please enter Full Address.
                                                            </div>
                                                        : null
                                                    }
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>City *</label>
                                                                <Autocomplete
                                                                    options={cityOptions}
                                                                    value={cityOptions.find(v => v.city == cartDetails.city) || {}}
                                                                    defaultValue={'test1'}
                                                                    style={{ width: '100%' }}
                                                                    onChange={(e, v) => handleCityChange(e, v)}
                                                                    getOptionLabel={(option) => option.city}
                                                                    renderInput={(params) => (
                                                                        <div
                                                                            ref={params.InputProps.ref}
                                                                            className="input-field-control-role-"

                                                                        >
                                                                            <input
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: 35,
                                                                                    border: "1px solid rgba(0,0,0,0.1)",
                                                                                    borderRadius: ".25rem",
                                                                                    paddingLeft: "10px",
                                                                                }}

                                                                                {...params}
                                                                                label=""
                                                                                variant="outlined"
                                                                                type="text"
                                                                                {...params.inputProps}
                                                                                required
                                                                            />
                                                                        </div>
                                                                    )}
                                                                />
                                                                {validated && cartDetails.city == '' || cartDetails.city == undefined ?
                                                                    <div className="validation-error">
                                                                        Please enter City.
                                                                    </div>
                                                                    : null
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label>Zip Code *</label>
                                                                <input className="form-control" onChange={(e) => handleOnChange(e, 'zipcode')} required />
                                                            </div>
                                                            {validated && cartDetails.zipCode == '' || cartDetails.zipCode == undefined ?
                                                                <div className="validation-error">
                                                                    Please enter Zipcode.
                                                            </div>
                                                                : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-xl-4" id="sidebar_fixed">
                                            <div className="box_order mobile_fixed">
                                                <div className="head">
                                                    <h3>Order Summary</h3>
                                                    <div>{cartDetails.vendor.first_name}'s Kitchen</div>
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
                                                                            <span onClick={() => onAddItem(item)} className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
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
                                                        <button className="btn_1 text-white gradient full-width mb_5" type="submit">Submit</button>
                                                        {/* <a  onClick={() => onSubmit()}>Order Now</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                :
                                <div className="container margin_60_20">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="cart-empty-page text-center">
                                                        <div className="">
                                                            <img src={emptyImg} alt="" />
                                                        </div>
                                                        <h3 className="title-emptycart">Missing Cart items?</h3>
                                                        <p className="inf-empty-cart">Login to see the items you added previously</p>
                                                        <div className="btnempty--page">
                                                            <a onClick={() => history.push('/home')} className="btn_1 gradient empty-cart-btn">Add Items</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
<<<<<<< HEAD
                            </div>
                        </div>
                    </div>
                    :
                    'No Items'
            }
            </div>
        </main >
<<<<<<< HEAD
=======
        <main class="bg_gray mt-0">
            <div class="container margin_60_20">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="cart-empty-page text-center">
                                    <div className="">
                                        <img src={emptyImg} alt="" />
                                    </div>
                                    <h3 className="title-emptycart">Missing Cart items?</h3>
                                    <p className="inf-empty-cart">Login to see the items you added previously</p>
                                    <div className="btnempty--page">
                                        <a href="#" className="btn_1 gradient empty-cart-btn">Add Items</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
>>>>>>> 2a692e35283723f5758d61bd5478781f7b164f81
=======
                        }
                    </>}</div>
            </main >
>>>>>>> tezi-dev
        </>
    );
}
export default Order;