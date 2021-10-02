import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
import { allProductSubCategory, productSubCatByCategoryId } from "../../../redux/actions/prodSubCategoryAction";
import { cartByUser, updateCart, removeCart, handleCart, addCart } from "../../../redux/actions/cartAction";

const GridListingFilterscol = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [id, setId] = useState(props.location.state.id);
    const [isLoding, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(9);
    const [search, setSearch] = useState(props.location.state.search);
    const [subCategoryList, setSubCategoryList] = useState("");
    const [itemCount, setItemCount] = useState(0)
    const [cartDetails, setCartDetails] = useState({

    })
    const { cart } = useSelector((state) => ({
        cart: state.cart,
    }));
    const { allProdSubCategory, count } = useSelector((state) => ({
        allProdSubCategory: state.productSubCategory.menu,
        count: state.productSubCategory.count,
    }));
    useEffect(() => {
       // console.log("props", props.location.state.type)
        getMenu(props.location.state.type)
    }, [page, search])
    useEffect(async () => {
        setSubCategoryList(allProdSubCategory)
    }, [allProdSubCategory]);

    let getMenu = async (val) => {
        async function getProductSubCategory() {
            setIsLoading(true)
            let params = {
                categoryId: id,
                page: page,
                size: size,
                search: search
            }
            if(val){
                await dispatch(allProductSubCategory(params));
                setIsLoading(false)
            }else{
                await dispatch(productSubCatByCategoryId(params));
                setIsLoading(false)
            }
        }
        getProductSubCategory()
    }
    let onAddItem = async (value) => {
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
            if (cartData.vendor._id == value.vendor._id) {
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
                    text: `Your cart contain dishes from  ${cartData.vendor.first_name}. Do you want to discard and add dishes from ${value.vendor.first_name}?`,
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
                                    vendorId: value.vendor._id,
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
                                let userdata = await dispatch(cartByUser(userpayload, true));
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
                vendorId: value.vendor._id,
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
            let userdata = await dispatch(cartByUser(userpayload, true));
            setIsLoading(false)
        }
    }
    let paginationClick = (e, val) => {
        e.preventDefault()
        setPage(val)
    }
    let nextClick = (e) => {
        e.preventDefault()
        if (page >= Math.ceil(count / size)) {
            return
        }
        setPage(page + 1)
    }

    let prevClick = (e) => {
        e.preventDefault()
        if (page <= 1) {
            return
        }
        setPage(page - 1)
    }
    let findAvg = (arr, key) => {
        if(!arr.length){
            return 'n/a'
        }
        let avg = arr.reduce((r, c) => r + parseFloat(c[key]), 0) / arr.length;
        return avg.toFixed(1)
    }
    console.log("")
    return (
        <main>
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            <div className="page_header element_to_stick">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
                            {/* <h1>145 restaurants in Convent Street 2983</h1>
                            <a href="#0">Change address</a> */}
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <div className="search_bar_list">
                                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className="form-control" placeholder="Dish , City , Resaturant" />
                                <button type="submit"><i className="icon_search"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container margin_30_20">
                <div class="row">

                    <aside className="col-lg-3" id="sidebar_fixed">
                        {/* <div className="type_delivery">
                            <ul className="clearfix">
                                <li>
                                    <label className="container_radio">Delivery
                                    <input type="radio" name="type_d" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="container_radio">Take away
                                    <input type="radio" name="type_d" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div> */}
                        {/* 
                        <a href="#0" className="open_filters btn_filters"><i className="icon_adjust-vert"></i><span>Filters</span></a> */}

                        <div className="filter_col">
                            <div className="inner_bt clearfix">Filters<a href="#" className="open_filters"><i className="icon_close"></i></a></div>
                            <div className="filter_type">
                                <h4><a href="#filter_1" data-toggle="collapse" className="opened">Sort</a></h4>
                                <div className="collapse show" id="filter_1">
                                    <ul>
                                        <li>
                                            <label className="container_radio">Top Rated
                                                <input type="radio" name="filter_sort" checked="" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_radio">Reccomended
                                                <input type="radio" name="filter_sort" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_radio">Price: low to high
                                                <input type="radio" name="filter_sort" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_radio">Up to 15% off
                                                <input type="radio" name="filter_sort" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_radio">All Offers
                                                <input type="radio" name="filter_sort" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_radio">Distance
                                                <input type="radio" name="filter_sort" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="filter_type">
                                <h4><a data-toggle="collapse" className="closed">Categories</a></h4>
                                <div className="collapse" id="filter_2">
                                    <ul>
                                        <li>
                                            <label className="container_check">Pizza - Italian <small>12</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Japanese - Sushi <small>24</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Burghers <small>23</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Vegetarian <small>11</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Bakery <small>18</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Chinese <small>12</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Mexican <small>15</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="filter_type">
                                <h4><a data-toggle="collapse" className="closed">Distance</a></h4>
                                <div className="collapse" id="filter_3">
                                    <div className="distance">Radius around selected destination <span></span> km</div>
                                    <div className="add_bottom_25"><input type="range" min="10" max="50" step="5" value="20" data-orientation="horizontal" /></div>
                                </div>
                            </div>



                            <div className="filter_type last">
                                <h4><a data-toggle="collapse" className="closed">Rating</a></h4>
                                <div className="collapse" id="filter_4">
                                    <ul>
                                        <li>
                                            <label className="container_check">Superb 9+ <small>06</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Very Good 8+ <small>12</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Good 7+ <small>17</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Pleasant 6+ <small>43</small>
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p><a className="btn_1 outline full-width">Filter</a></p>
                        </div>
                    </aside>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-12">
                                {/* <h2 className="title_small">Top Categories</h2> */}
                                <div className="owl-carousel owl-theme categories_carousel_in listing">
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_1.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Pizza</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_2.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Sushi</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_3.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Dessert</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_4.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Hamburgher</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_5.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Ice Cream</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_6.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Kebab</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_7.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Italian</h3></a>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_8.jpg" alt="" className="owl-lazy" />
                                            <a href="#0"><h3>Chinese</h3></a>
                                        </figure>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* 
                        <div className="promo">
                            <h3>Free Delivery for your first 14 days!</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <i className="icon-food_icon_delivery"></i>
                        </div> */}


                        <div className="row">
                            {/* <div className="col-12"><h2 className="title_small">Menu Items</h2></div> */}
                            {
                                allProdSubCategory && allProdSubCategory.map((val) => {
                                    return (
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="strip">
                                                <figure>
                                                    <img src={val.image ? val.image : null} alt="" class="owl-lazy fit-image" style={{ opacity: "1", minHeight: '285px' }} />
                                                    <a className="strip_info">
                                                        <div className="item_title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <div>
                                                                <h3>{val.item}</h3>
                                                                <small>{val.description}</small>
                                                            </div>
                                                            <div onClick={() => onAddItem(val)} style={{ color: 'white', fontWeight: 'bold' }}><span className="addcart-item"><i className="icon_plus"></i></span></div>
                                                        </div>
                                                    </a>

                                                </figure>

                                                <ul>
                                                    <li><span className="deliv yes">{val.vendor.first_name}</span></li>
                                                    {/* <li><span className=" yes">{val.vendor.city}</span></li> */}
                                                    <li>
                                                        <div className="score"><strong> { val.vendor? findAvg(val.vendor.reviews, 'rating'): ''}</strong></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div className="pagination_fg">
                            <a onClick={(e) => prevClick(e)} >&laquo;</a>
                            {count && Array.from({ length: Math.ceil(parseInt(count) / size) }, (_, index) => {
                                return (
                                    <a onClick={(e) => paginationClick(e, index + 1)} className={`${index + 1 == page ? 'active' : ''}`}>{index + 1}</a>
                                )
                            })}
                            {/* <a className="active">1</a> */}
                            <a onClick={(e) => nextClick(e)} >&raquo;</a>
                        </div>
                    </div>

                </div>
            </div>


        </main >);
}

export default GridListingFilterscol;