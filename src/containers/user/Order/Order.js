import React, { useState, useEffect } from 'react';
import { Checkmark } from 'react-checkmark'
import { useDispatch, useSelector } from "react-redux";
import { cartByUser } from "../../../redux/actions/cartAction";

const Order = () => {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(0)
    const [cartDetails, setCartDetails] = useState({

    })
    const { cart } = useSelector((state) => ({
        cart: state.cart,
    }));
    useEffect(async () => {
        let payload = {
            customerId: localStorage.id
        }
        let data = await dispatch(cartByUser(payload));
        if (data.success) {
            if (data.data) {
                setItemCount(data.data.items.length)
                setCartDetails(data.data)
            }
        }
    }, [])
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
    console.log("cartDetails", cartDetails)
    return (
        <main class="bg_gray">
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
                            <div class="box_order_form">
                                <div class="head">
                                    <div class="title">
                                        <h3>Personal Details</h3>
                                    </div>
                                </div>

                                <div class="main">
                                    <div class="form-group">
                                        <label>First and Last Name</label>
                                        <input class="form-control" placeholder="First and Last Name" />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input class="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone</label>
                                                <input class="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Full Address</label>
                                        <input class="form-control" placeholder="Full Address" />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input class="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label>Postal Code</label>
                                                <input class="form-control" placeholder="0123" />
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
                                                            <span className="fst-add commn--tt-p"><button className="btn btn-comn-add less-btn-tt"><i className="icon_minus-06"></i></button></span>
                                                            <span className="scn--add commn--tt-p">{item.quantity}</span>
                                                            <span className="thirt-add commn--tt-p"><button className="btn btn-comn-add add-btn-tt"><i className="icon_plus"></i></button></span>
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
                    'No Items'
            }


            </div>

        </main >
    );
}

export default Order;