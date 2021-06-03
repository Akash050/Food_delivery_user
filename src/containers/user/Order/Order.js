import React, { useState, useEffect } from 'react';
import cities from '../../../components/ma.json'
import { Checkmark } from 'react-checkmark'
import { useDispatch, useSelector } from "react-redux";
import Loading from "react-fullscreen-loading";
import emptyImg from '../../../img/empty-img.png'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from 'react-router-dom';
import { cartByUser, removeCart, updateCart, addCart } from '../../../redux/actions/cartAction';

const Order = () => {
    
    let history = useHistory();
    const dispatch = useDispatch();
    const [cityOptions, setCityOptions] = useState(cities);
    const [itemCount, setItemCount] = useState(0)
    const [isLoding, setIsLoading] = useState(false);
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
        if(cart.cart){
            console.log("cardt chanhe", cart.cart)
            setCartDetails(cart.cart)
        }else{
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
    console.log("phone_number", cartDetails)
    return (
        <>
         {isLoding ? <Loading loading loaderColor="#3498DB" /> : null}
        <main class="bg_gray">
            <div class="container margin_60_20">
                {
                cartDetails.items != undefined ?
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
                            <div class="box_order_form">
                                <div class="head">
                                    <div class="title">
                                        <h3>Personal Details</h3>
                                    </div>
                                </div>
                                <div class="main">
                                <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>First Name *</label>
                                                <input value = {cartDetails.customer.first_name} class="form-control"  />
                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Last Name *</label>
                                                <input value = {cartDetails.customer.last_name} class="form-control"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email Address *</label>
                                                <input value = {cartDetails.customer.email} class="form-control"  />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone *</label>
                                                <input class="form-control"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Full Address *</label>
                                        <input class="form-control"  />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
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
                                                            />
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label>Postal Code *</label>
                                                <input class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                            <span onClick={() => onRemoveItem(item)} className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                            <span className="scn--add commn--tt-p">{item.quantity}</span>
                                                            <span onClick={() => onAddItem(item)}  className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
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
                                        <a href="order.html" className="btn_1 text-white gradient full-width mb_5">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
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
                                                <a onClick = {() =>history.push('/home')} className="btn_1 gradient empty-cart-btn">Add Items</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            </div>
        </main >
        </>
    );
}
export default Order;