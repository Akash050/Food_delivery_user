import React, { useState, useEffect } from 'react';
import Pizza from '../../../img/pizza.jpg'
import { useDispatch, useSelector } from 'react-redux';
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
import moment from 'moment';
import { getUserOrders } from '../../../redux/actions/orderAction';
const Orders = () => {
    let dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const { dataSet } = useSelector((state) => ({
        dataSet: state.orders.userOrders
    }));
    useEffect(() => {
        getOrders()
    }, []);
    useEffect(() => {
        if (!dataSet) {
            return
        }
        setOrderList(dataSet)
    }, [dataSet]);
    async function getOrders() {
        setIsLoading(true)
        dispatch(getUserOrders());
        setIsLoading(false)
    }
    // console.log("daradataSet", dataSet)
    return (
        <>
            {isLoading ? <Loading loading loaderColor="#3498db" /> : null}
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
                        {orderList && orderList.map(val => {
                            console.log("val orderList", val)
                            return (
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
                                                            <h4 className="head--product--name">{val.vendor.first_name}'s Kitchen</h4>
                                                            <p className="shrt--disc"> {val.address}, {val.city}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="status--bar-flex">
                                                    {/* <span className={`${val.status == 'Delivered'? 'product--status-view  order-status-delivered': `${val.status == 'Cancel'? 'product--status-view  order-status-rejected':'product--status-view order-status-delivered'}``}>{val.status}</span> */}
                                                    <span className={`product--status-view  ${val.status == 'Delivered' ? 'order-status-delivered' : val.status == 'Cancel' ? 'order-status-rejected' : 'order-status'}`}>{val.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main orderItem--inform-grid">
                                            <div className="listItem--order-below">
                                                <div className="txt-order--inf">
                                                    <h6 className="order_Txt_head-card">ORDER NUMBER</h6>
                                                    <p className="infoTxt--view-card">{val._id}</p>
                                                </div>
                                                <div className="txt-order--inf">
                                                    <h6 className="order_Txt_head-card">TOTAL AMOUNT</h6>
                                                    <p className="infoTxt--view-card">{val.grandTotal}</p>
                                                </div>
                                                <div className="txt-order--inf">
                                                    <h6 className="order_Txt_head-card">ITEMS</h6>
                                                    <p className="infoTxt--view-card">
                                                        {val.items.map((item , i) => {
                                                            if(i > 1){
                                                                return
                                                            }
                                                            return (
                                                                `${item.quantity} x ${item.itemName  } `
                                                            )
                                                        })}
                                                    </p>
                                                </div>
                                                <div className="txt-order--inf">
                                                    <h6 className="order_Txt_head-card">ORDERED ON</h6>
                                                    <p className="infoTxt--view-card">{moment(val.createdAt).format('LLL')}</p>
                                                </div>
                                            </div>
                                            <div className="order-view-item-btn text-center">
                                                <a href="javascript:void(0)" className="btn_1 medium btnview--orderdtl">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>);
}
export default Orders;