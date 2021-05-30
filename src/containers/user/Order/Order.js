import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Order = () => {
    const [items, setItems] = useState([])
    const { cartItems } = useSelector((state) => ({
        cartItems: state.cart
    }));
    const [totalCount, setTotalCount] = useState([])
    useEffect(() => {
        let counter = {}
        cartItems.forEach(function (obj) {
            var key = JSON.stringify(obj)
            counter[key] = (counter[key] || 0) + 1
        })
        console.log(counter)
        setTotalCount(counter)
    }, []);
    console.log(totalCount, 'tor')
    console.log(cartItems)
    return (
        <main class="bg_gray">
            <div class="container margin_60_20">
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

                        {/* <div class="box_order_form">
                            <div class="head">
                                <div class="title">
                                    <h3>Payment Method</h3>
                                </div>
                            </div>

                            <div class="main">
                                <div class="payment_select">
                                    <label class="container_radio">Credit Card
					                <input type="radio" value="" checked name="payment_method" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <i class="icon_creditcard"></i>
                                </div>
                                <div class="form-group">
                                    <label>Name on card</label>
                                    <input type="text" class="form-control" id="name_card_order" name="name_card_order" placeholder="First and last name" />
                                </div>
                                <div class="form-group">
                                    <label>Card number</label>
                                    <input type="text" id="card_number" name="card_number" class="form-control" placeholder="Card number" />
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Expiration date</label>
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="form-group">
                                                    <input type="text" id="expire_month" name="expire_month" class="form-control" placeholder="mm" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="form-group">
                                                    <input type="text" id="expire_year" name="expire_year" class="form-control" placeholder="yyyy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Security code</label>
                                            <div class="row">
                                                <div class="col-md-4 col-6">
                                                    <div class="form-group">
                                                        <input type="text" id="ccv" name="ccv" class="form-control" placeholder="CCV" />
                                                    </div>
                                                </div>
                                                <div class="col-md-8 col-6">
                                                    <img src="img/icon_ccv.gif" width="50" height="29" alt="ccv" /><small>Last 3 digits</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="payment_select" id="paypal">
                                    <label class="container_radio">Pay with Paypal
					                <input type="radio" value="" name="payment_method" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="payment_select">
                                    <label class="container_radio">Pay with Cash
					                <input type="radio" value="" name="payment_method" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <i class="icon_wallet"></i>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <div class="col-xl-4 col-xl-4" id="sidebar_fixed">
                        <div className="box_order mobile_fixed">
                                    <div className="head">
                                        <h3>Order Summary</h3>
                                        <div>Mariana's Kitchen</div>
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
                                            <a href="order.html" className="btn_1 text-white gradient full-width mb_5">Order Now</a>
                                        </div>
                                    </div>
                                </div>

                    </div>

                </div>

            </div>

        </main >
    );
}

export default Order;