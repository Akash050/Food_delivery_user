import React, { useEffect, useState } from "react";
import Background from "../../../img/hero_general.jpg";
import { useHistory } from "react-router-dom";
import { userById } from "../../../redux/actions/vendorAction";
import { MenuItemByVendor } from "../../../redux/actions/menuItemAction";
import swal from "sweetalert";
import moment from "moment";
import Loading from "react-fullscreen-loading";
import { useDispatch, useSelector } from "react-redux";
import {
    cartByUser,
    removeCart,
    updateCart,
    addCart,
} from "../../../redux/actions/cartAction";
import { allProductCategory } from "../../../redux/actions/prodCategoryAction";
const RestaurantDetails = (props) => {
    let stateData = props.location.state && props.location.state.data;
    const [vendorId, setVendorId] = useState(stateData && stateData._id);
    const [isLoding, setIsLoading] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [itemCount, setItemCount] = useState(0);
    const [menuItems, setMenuItems] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState("");
    const [cartDetails, setCartDetails] = useState({});
    let dispatch = useDispatch();

    let history = useHistory();

    const { cart } = useSelector((state) => ({
        cart: state.cart,
    }));
    const { vendor } = useSelector((state) => ({
        vendor: state.vendor.userData,
    }));
    let getCart = async (flag) => {
        setIsLoading(true);
        let payload = {
            customerId: localStorage.id,
        };
        let data = await dispatch(cartByUser(payload, false));
        if (data.success) {
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        async function getuserData() {
            let param = {
                id: vendorId,
            };
            await dispatch(userById(param));
            // await dispatch(MenuItemByVendor(param));
            setIsLoading(false);
        }
        getCart(false);
        getuserData();
        getCategory();
    }, []);
    useEffect(() => {
        // setIsLoading(true)
        if (cart.cart == undefined) {
            return;
        }
        if (cart.cart) {
            const sum = cart.cart.items
                .map((element) => element.quantity)
                .reduce((a, b) => a + b, 0);
            setItemCount(sum);
            setCartDetails(cart.cart);
            setShowCart(true);
            //  setIsLoading(false)
        } else {
            setCartDetails({});
            setItemCount(0);
        }
    }, [cart]);

    useEffect(async () => {
        if (vendor == undefined) {
            return;
        }
        setMenuItems(vendor.menus);
        setFilteredMenu(vendor.menus)
        setReviews(vendor.reviews);
        let sum = 0;
        await vendor.reviews.map((review) => {
            sum = sum + parseInt(review.rating);
        });
        let avg = sum / vendor.reviews.length;
        setAverageRating(avg);
    }, [vendor]);

    let getCategory = async () => {
        let data = await dispatch(allProductCategory());
        if (data.success) {
            setCategory(data.data);
        }
    };

    useEffect(() => {
        // console.log("catt menuItems", menuItems)
        if (selectedCategory == 'All') {
            setFilteredMenu(menuItems)
            return
        }
        let filteredData = menuItems.filter(val => val.category.category == selectedCategory)
        setFilteredMenu(filteredData)
    }, [selectedCategory]);

    let onRemoveItem = async (item) => {
        let tempCart = cartDetails;
        const findItem = tempCart.items.find((ele) => ele.itemId == item.itemId);
        const findItemIndex = tempCart.items.findIndex(
            (ele) => ele.itemId == item.itemId
        );
        if (findItem.quantity > 1) {
            tempCart.items[findItemIndex].quantity = findItem.quantity - 1;
            setCartDetails(tempCart);
            setIsLoading(true);
            let data = await dispatch(updateCart(tempCart));
            getCart(true);
        } else {
            if (tempCart.items.length > 1) {
                const findItemIndex = tempCart.items.findIndex(
                    (ele) => ele.itemId == item.itemId
                );
                const filterArray = tempCart.items.filter(
                    (element, index) => index != findItemIndex
                );
                tempCart.items = filterArray;
                setIsLoading(true);
                let data = await dispatch(updateCart(tempCart));
                getCart(true);
            } else {
                setIsLoading(true);
                let data = await dispatch(removeCart(tempCart._id));
                getCart(true);
            }
        }
    };

    let onAddItem = async (item) => {
        let tempCart = cartDetails;
        const findItem = tempCart.items.find((ele) => ele.itemId == item.itemId);
        const findItemIndex = tempCart.items.findIndex(
            (ele) => ele.itemId == item.itemId
        );
        if (findItem.quantity < 4) {
            tempCart.items[findItemIndex].quantity = findItem.quantity + 1;
            setCartDetails(tempCart);
            setIsLoading(true);
            let data = await dispatch(updateCart(tempCart));
            getCart(true);
        }
    };
    let checkout = (e) => {
        e.preventDefault();
        history.push("/cart");
    };

    let onDeleteItem = async (item) => {
        let tempCart = cartDetails;
        if (tempCart.items.length > 1) {
            const findItemIndex = tempCart.items.findIndex(
                (ele) => ele.itemId == item.itemId
            );
            const filterArray = tempCart.items.filter(
                (element, index) => index != findItemIndex
            );
            tempCart.items = filterArray;
            setIsLoading(true);
            let data = await dispatch(updateCart(tempCart));
            getCart(true);
        } else {
            setIsLoading(true);
            let data = await dispatch(removeCart(tempCart._id));
            getCart(true);
        }
    };

    let onAddCartItem = async (value) => {
        if (localStorage.isLoggedIn == undefined) {
            props.history.push("/login");
            return;
        }
        let payload = {
            customerId: localStorage.id,
        };
        let data = await dispatch(cartByUser(payload, false));
        if (data.data) {
            let cartData = data.data;
            if (cartData.vendor._id == value.vendor) {
                setIsLoading(true);
                let cartData = data.data;
                const findItemIndex = cartData.items.findIndex(
                    (ele) => ele.itemId == value._id
                );
                if (findItemIndex > -1) {
                    cartData.items[findItemIndex].quantity =
                        cartData.items[findItemIndex].quantity + 1;
                    let data = await dispatch(updateCart(cartData, true));
                    let userpayload = {
                        customerId: localStorage.id,
                    };
                    let userdata = await dispatch(cartByUser(userpayload, false));
                    setIsLoading(false);
                } else {
                    let temp = {
                        itemId: value._id,
                        quantity: 1,
                    };
                    cartData.items.push(temp);
                    let data = await dispatch(updateCart(cartData, true));
                    let userpayload = {
                        customerId: localStorage.id,
                    };
                    let userdata = await dispatch(cartByUser(userpayload, false));
                    setIsLoading(false);
                }
            } else {
                swal({
                    title: "Replace Cart Item?",
                    text: `Your cart contain dishes from ${cartData.vendor.first_name}. Do you want to discard and add new ?`,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then(async (willDelete) => {
                    if (willDelete) {
                        let data = await dispatch(removeCart(cartData._id));
                        if (data.success) {
                            setIsLoading(true);
                            let payload = {
                                customerId: localStorage.id,
                                vendorId: value.vendor,
                                items: [
                                    {
                                        itemId: value._id,
                                        quantity: 1,
                                    },
                                ],
                            };
                            let data = await dispatch(addCart(payload, false));
                            let userpayload = {
                                customerId: localStorage.id,
                            };
                            let userdata = await dispatch(cartByUser(userpayload, false));
                            setIsLoading(false);
                        } else {
                            swal({
                                title: "Error",
                                text: data.message,
                                icon: "error",
                                button: "ok",
                            });
                        }
                    } else {
                    }
                });
            }
        } else {
            setIsLoading(true);
            let payload = {
                customerId: localStorage.id,
                vendorId: value.vendor,
                items: [
                    {
                        itemId: value._id,
                        quantity: 1,
                    },
                ],
            };
            let data = await dispatch(addCart(payload, false));
            let userpayload = {
                customerId: localStorage.id,
            };
            let userdata = await dispatch(cartByUser(userpayload, false));
            setIsLoading(false);
        }
    };
    let onSelectCategory = (e, val) => {
        e.preventDefault();
        setSelectedCategory(val);
    };
    //   console.log("aaavg", filteredMenu)
    return (
        <main>
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            <div
                className="hero_in detail_page background-image"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <div
                    className="wrapper opacity-mask"
                    style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
                >
                    <div className="container">
                        <div className="main_info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="head">
                                        <div className="score">
                                            <span>
                                                <em>{reviews.length ? reviews.length : 0} Reviews</em>
                                            </span>
                                            <strong>{averageRating ? parseFloat(averageRating).toFixed(1) : 'n/a'}</strong>
                                        </div>
                                    </div>
                                    <h1>{stateData && stateData.first_name}</h1>
                                    {stateData && stateData.street} {stateData && stateData.area} {stateData && stateData.city}
                                </div>
                                <div className="col-xl-8 col-lg-7 col-md-6">
                                    {/* <div className="buttons clearfix">
                                        <span className="magnific-gallery">
                                            <a href="img/detail_1.jpg" className="btn_hero" title="Photo title"
                                                data-effect="mfp-zoom-in"><i className="icon_image"></i>View photos</a>
                                            <a href="img/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                            <a href="img/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                        </span>
                                        <a href="#0" className="btn_hero wishlist"><i className="icon_heart"></i>Wishlist</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="secondary_nav sticky_horizontal">
                <div className="container">
                    <ul id="secondary_nav">
                        <li>
                            <a
                                onClick={(e) => onSelectCategory(e, "All")}
                                className={`list-group-item ${selectedCategory == "All" ? "cat-selected" : null
                                    } list-group-item-action`}
                                href="#section-1"
                            >
                                All
                            </a>
                        </li>
                        {category &&
                            category.map((cat, i) => {
                                return (
                                    <li>
                                        <a
                                            onClick={(e) => onSelectCategory(e, cat.category)}
                                            className={`list-group-item ${selectedCategory == cat.category ? "cat-selected" : null
                                                } list-group-item-action`}
                                            href="#section-1"
                                        >
                                            {cat.category}
                                        </a>
                                    </li>
                                );
                            })}
                        <li>
                            <a
                                className="list-group-item-hide list-group-item-action"
                                href="#section-2"
                            >
                                All
                            </a>
                        </li>
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
                                    {filteredMenu.map((val) => {
                                        return (
                                            <div className="col-md-6">
                                                <a className="menu_item modal_dialog">
                                                    <figure>
                                                        <img
                                                            src={val.image}
                                                            data-src={val.image}
                                                            alt="Item"
                                                            className="lazy"
                                                        />
                                                    </figure>
                                                    <figure>
                                                        <div
                                                            onClick={() => onAddCartItem(val)}
                                                            style={{ color: "white", fontWeight: "bold"}}
                                                            className="menu-item-card"
                                                        >
                                                            <span className="addcart-item">
                                                                <i className="icon_plus"></i>
                                                            </span>
                                                        </div>
                                                    </figure>
                                                    <h3>{val.item}</h3>
                                                    <p>{val.description}</p>
                                                    <h3>${val.price}</h3>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>

                        { cartDetails.items != undefined ? (
                            <div className="col-lg-4" id="sidebar_fixed">
                                <div className="box_order mobile_fixed">
                                    <div className="head">
                                        <h3>Order Summary</h3>
                                    </div>

                                    <div className="main">
                                        <ul className="clearfix">
                                            {cartDetails.items.map((item) => {
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
                                                                <span
                                                                    onClick={() => onRemoveItem(item)}
                                                                    className="fst-add commn--tt-p"
                                                                >
                                                                    <button className="btn btn-comn-add less-btn-tt">
                                                                        <i className="icon_minus-06"></i>
                                                                    </button>
                                                                </span>
                                                                <span className="scn--add commn--tt-p">
                                                                    {item.quantity}
                                                                </span>
                                                                <span
                                                                    onClick={() => onAddItem(item)}
                                                                    className="thirt-add commn--tt-p"
                                                                >
                                                                    <button className="btn btn-comn-add add-btn-tt">
                                                                        <i className="icon_plus"></i>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                            <div className="productTitel--cart">
                                                                <p>{item.itemName}</p>
                                                            </div>
                                                            <div className="price--cart--tag summary-price">
                                                                <span className="price--txt">
                                                                    ${item.unitPrice}
                                                                </span>
                                                                <span
                                                                    onClick={() => onDeleteItem(item)}
                                                                    className="remove--item-cart"
                                                                >
                                                                    <i className="icon_close"></i>
                                                                </span>
                                                            </div>
                                                            {/* <div className="croscart--page">
                                                            <span onClick={() => onDeleteItem(item)} className="remove--item-cart"><i className="icon_close"></i></span>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </ul>
                                        <hr></hr>
                                        <ul className="clearfix">
                                            <li>
                                                Total Price<span>${cartDetails.totalPrice}</span>
                                            </li>
                                            <li>
                                                Discount<span>${cartDetails.discountValue}</span>
                                            </li>
                                            <li className="total">
                                                Grand Total<span>${cartDetails.grandTotal}</span>
                                            </li>
                                        </ul>
                                        <div className="btn_1_mobile">
                                            <div
                                                className="btn_1 gradient full-width mb_5"
                                                onClick={(e) => checkout(e)}
                                            >
                                                Continue to checkout
                                            </div>
                                            <div className="text-center">
                                                <small>No money charged on this steps</small>
                                            </div>
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
                        ) : (
                            <div className="col-lg-4" id="sidebar_fixed">
                                <div className="box_order mobile_fixed">
                                    <div className="head">
                                        <h3>Order Summary</h3>
                                        <a href="#0" className="close_panel_mobile">
                                            <i className="icon_close"></i>
                                        </a>
                                    </div>
                                    {/* <div className={`cartbox--view dropdown-menu ${showCart ? 'showCart' : null} `} id="myDropdown"> */}

                                    <div className="main empty-cart">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={80}
                                            height={80}
                                            fill="currentColor"
                                            className="bi bi-info-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                        <p className="empty-cart-text">
                                            <strong>You have no items in your cart</strong>{" "}
                                        </p>
                                    </div>
                                    <a className="btn_1 text-white gradient full-width mb_5">
                                        Add items to cart
                                    </a>
                                    {/* <div className="main-item-total">
                                                    <div className="total--item-cart"><span className="tt-name-left">Total Price</span><span className="tt-amt-right">${cartDetails.totalPrice}</span></div>
                                                    <div className="total--item-cart"><span className="tt-name-left">Discount</span><span className="tt-amt-right">${cartDetails.discountValue}</span></div>
                                                    <div className="total--item-cart total--amount"><span className="tt-name-left">Grand Total</span><span className="tt-amt-right">${cartDetails.grandTotal}</span></div>
                                                </div> */}
                                    <div className="btn_1_mobile mt-4"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="btn_reserve_fixed">
                        <a href="#0" className="btn_1 gradient full-width">
                            View Basket
                        </a>
                    </div>
                </div>
            </div>
            {filteredMenu.length ?
                <div className="container margin_30_20">
                    <div className="row">
                        <div className="col-lg-8 list_menu">
                            <section id="section-5">
                                <h4>Reviews</h4>
                                <div className="row add_bottom_30 d-flex align-items-center reviews">
                                    <div className="col-md-3">
                                        <div id="review_summary">
                                            <strong>{averageRating ? parseFloat(averageRating).toFixed(1) : 'n/a'}</strong>
                                            {/* <em>Superb</em> */}
                                            <small>
                                                Based on {reviews.length ? reviews.length : 0} reviews
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-9 reviews_sum_details"></div>
                                </div>

                                <div id="reviews">
                                    {reviews.map((review) => {
                                        return (
                                            <div className="review_card">
                                                <div className="row">
                                                    <div className="col-md-2 user_info">
                                                        <figure>
                                                            <img src="img/avatar4.jpg" alt="" />
                                                        </figure>
                                                        <h5>{review.user.first_name}</h5>
                                                    </div>
                                                    <div className="col-md-10 review_content">
                                                        <div className="clearfix add_bottom_15">
                                                            <span className="rating">
                                                                {review.rating}
                                                                <small>/5</small> <strong>Rating</strong>
                                                            </span>
                                                            <em>
                                                                Published {moment(review.createdAt).format("LL")}{" "}
                                                            </em>
                                                        </div>
                                                        <h4>{review.title}</h4>
                                                        <p>{review.review}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="text-right">
                                    <div
                                        className="btn_1 gradient"
                                        onClick={() =>
                                            history.push({
                                                pathname: `/review/${vendorId}`,
                                                state: { data: vendor },
                                            })
                                        }
                                    >
                                        Leave a Review
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                : null}
        </main>
    );
};

export default RestaurantDetails;
