import React, { useState } from 'react';
import Pizza from '../../../img/pizza.jpg'
const Orders = () => {
    return (
        <>
            <main className="bg_gray mt-0 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-4">
                                <h3>Order History</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <div class="box_order_form">
                                <div class="order-header">
                                    <div className="mainHeader--order">
                                        <div className="order-flex--product">
                                            <div className="orderImg-box-view">
                                                <img className="order_img--tt" src={Pizza} alt="" />
                                            </div>
                                            <div className="order--rigt--flex">
                                                <div className="order_product_name">
                                                    <h4 className="head--product--name">Domino's Pizza</h4>
                                                    <p className="shrt--disc">Phase 5, Mohali</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status--bar-flex">
                                            <span className="product--status-view">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main orderItem--inform-grid">
                                    <div className="listItem--order-below">
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDER NUMBER</h6>
                                            <p className="infoTxt--view-card">2052443836</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">TOTAL AMOUNT</h6>
                                            <p className="infoTxt--view-card">$356</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ITEMS</h6>
                                            <p className="infoTxt--view-card">1 X Cheese n Corn, 1 x Choco Lava Cake  </p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDERED ON</h6>
                                            <p className="infoTxt--view-card">April 03, 2020 at 06:40 PM</p>
                                        </div>
                                    </div>
                                    <div className="order-view-item-btn text-center">
                                        <a href="javascript:void(0)" className="btn_1 medium btnview--orderdtl">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="box_order_form">
                                <div class="order-header">
                                    <div className="mainHeader--order">
                                        <div className="order-flex--product">
                                            <div className="orderImg-box-view">
                                                <img className="order_img--tt" src={Pizza} alt="" />
                                            </div>
                                            <div className="order--rigt--flex">
                                                <div className="order_product_name">
                                                    <h4 className="head--product--name">Domino's Pizza</h4>
                                                    <p className="shrt--disc">Phase 5, Mohali</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status--bar-flex">
                                            <span className="product--status-view cancel-order-color">Rejected</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main orderItem--inform-grid">
                                    <div className="listItem--order-below">
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDER NUMBER</h6>
                                            <p className="infoTxt--view-card">2052443836</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">TOTAL AMOUNT</h6>
                                            <p className="infoTxt--view-card">$356</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ITEMS</h6>
                                            <p className="infoTxt--view-card">1 X Cheese n Corn, 1 x Choco Lava Cake  </p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDERED ON</h6>
                                            <p className="infoTxt--view-card">April 03, 2020 at 06:40 PM</p>
                                        </div>
                                    </div>
                                    <div className="order-view-item-btn text-center">
                                        <a href="javascript:void(0)" className="btn_1 medium btnview--orderdtl">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="box_order_form">
                                <div class="order-header">
                                    <div className="mainHeader--order">
                                        <div className="order-flex--product">
                                            <div className="orderImg-box-view">
                                                <img className="order_img--tt" src={Pizza} alt="" />
                                            </div>
                                            <div className="order--rigt--flex">
                                                <div className="order_product_name">
                                                    <h4 className="head--product--name">Domino's Pizza</h4>
                                                    <p className="shrt--disc">Phase 5, Mohali</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status--bar-flex">
                                            <span className="product--status-view">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main orderItem--inform-grid">
                                    <div className="listItem--order-below">
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDER NUMBER</h6>
                                            <p className="infoTxt--view-card">2052443836</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">TOTAL AMOUNT</h6>
                                            <p className="infoTxt--view-card">$356</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ITEMS</h6>
                                            <p className="infoTxt--view-card">1 X Cheese n Corn, 1 x Choco Lava Cake  </p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDERED ON</h6>
                                            <p className="infoTxt--view-card">April 03, 2020 at 06:40 PM</p>
                                        </div>
                                    </div>
                                    <div className="order-view-item-btn text-center">
                                        <a href="javascript:void(0)" className="btn_1 medium btnview--orderdtl">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="box_order_form">
                                <div class="order-header">
                                    <div className="mainHeader--order">
                                        <div className="order-flex--product">
                                            <div className="orderImg-box-view">
                                                <img className="order_img--tt" src={Pizza} alt="" />
                                            </div>
                                            <div className="order--rigt--flex">
                                                <div className="order_product_name">
                                                    <h4 className="head--product--name">Domino's Pizza</h4>
                                                    <p className="shrt--disc">Phase 5, Mohali</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status--bar-flex">
                                            <span className="product--status-view">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main orderItem--inform-grid">
                                    <div className="listItem--order-below">
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDER NUMBER</h6>
                                            <p className="infoTxt--view-card">2052443836</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">TOTAL AMOUNT</h6>
                                            <p className="infoTxt--view-card">$356</p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ITEMS</h6>
                                            <p className="infoTxt--view-card">1 X Cheese n Corn, 1 x Choco Lava Cake  </p>
                                        </div>
                                        <div className="txt-order--inf">
                                            <h6 className="order_Txt_head-card">ORDERED ON</h6>
                                            <p className="infoTxt--view-card">April 03, 2020 at 06:40 PM</p>
                                        </div>
                                    </div>
                                    <div className="order-view-item-btn text-center">
                                        <a href="javascript:void(0)" className="btn_1 medium btnview--orderdtl">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>);
}
export default Orders;