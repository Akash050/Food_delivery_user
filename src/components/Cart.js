
import React, { useState, useEffect } from 'react';

const Cart = (props) => {

    return (
        <>
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
        </>
    );
}

export default Cart;