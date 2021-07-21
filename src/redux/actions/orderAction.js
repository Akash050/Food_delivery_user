import * as orderApi from "../../services/order";
import * as orderActionType from "../actionsType/orderActionType";


export const allOrders = (params) => async (dispatch) => {
    const response = await orderApi.allOrders(params);
    if (response.data.success) {
        dispatch({
            type: orderActionType.ALL_ORDERS,
            payload: response.data.data,
        });
    }
    return response.data;
};

export const orderByVendorId = () => async (dispatch) => {
    let vId = localStorage.getItem('id')
    let param = {
        vendorId: vId
    }
    const response = await orderApi.orderByVendorId(param);
    if (response.data.success) {
        dispatch({
            type: orderActionType.ORDERS_BY_VENDOR_ID,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const getUserOrders = () => async (dispatch) => {
    let vId = localStorage.getItem('id')
    let param = {
        customerId: vId
    }
    const response = await orderApi.orderByUser(param);
    if (response.data.success) {
        dispatch({
            type: orderActionType.USER_ORDERS,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const orderById = (param) => async (dispatch) => {
    const response = await orderApi.orderById(param);
    if (response.data.success) {
        dispatch({
            type: orderActionType.ORDER_BY_ID,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const createOrder = (param) => async (dispatch) => {
    const response = await orderApi.createOrder(param);
    return response.data;
};

export const updateOrder = (param) => async () => {
    const response = await orderApi.updateOrder(param);
    return response.data;
};
export const updateOrderStatus = (param) => async () => {
    const response = await orderApi.updateStatus(param);
    return response.data;
};

export const deleteOrder = (param) => async () => {
    const response = await orderApi.deleteOrder(param);
    return response.data;
};
