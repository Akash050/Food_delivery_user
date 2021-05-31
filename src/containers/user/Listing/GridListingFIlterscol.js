import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Loading from "react-fullscreen-loading";
import { allProductSubCategory, productSubCatByCategoryId } from "../../../redux/actions/prodSubCategoryAction";
import { ADD_CART } from "../../../redux/actionsType/cartActionType"
const GridListingFilterscol = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [id, setId] = useState(props.location.state.id);
    console.log(props.location.state.id)
    const [isLoding, setIsLoading] = useState(false);
    const [count, setCount] = useState(1);
    const [cart, setCart] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState("");
    const { allProdSubCategory } = useSelector((state) => ({
        allProdSubCategory: state.productSubCategory,
    }));
    useEffect(() => {
        async function getProductSubCategory() {
            setIsLoading(true)
            let params = {
                categoryId: id
            }
            await dispatch(productSubCatByCategoryId(params));
            setIsLoading(false)
        }
        getProductSubCategory()
    }, []);
    useEffect(async () => {
        setSubCategoryList(allProdSubCategory)

    }, [allProdSubCategory]);
    const addToCart = async (val) => {
        await setCart([...cart, val]);
    }
    useEffect(async () => {
        dispatch({
            type: ADD_CART,
            payload: cart,
        });
    }, [cart]);

    return (
        <main>
            {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
            <div className="page_header element_to_stick">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
                            <h1>145 restaurants in Convent Street 2983</h1>
                            <a href="#0">Change address</a>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <div className="search_bar_list">
                                <input type="text" className="form-control" placeholder="Dishes, restaurants or cuisines" />
                                <button type="submit"><i className="icon_search"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container margin_30_20">
                <div class="row">

                    <aside className="col-lg-3" id="sidebar_fixed">
                    <div className="type_delivery">
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
                    </div>
                
                    <a href="#0" className="open_filters btn_filters"><i className="icon_adjust-vert"></i><span>Filters</span></a>
                
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
                            <h4><a href="#filter_2" data-toggle="collapse" className="closed">Categories</a></h4>
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
                            <h4><a href="#filter_3" data-toggle="collapse" className="closed">Distance</a></h4>
                            <div className="collapse" id="filter_3">
                                <div className="distance">Radius around selected destination <span></span> km</div>
                                <div className="add_bottom_25"><input type="range" min="10" max="50" step="5" value="20" data-orientation="horizontal" /></div>
                            </div>
                        </div>

                        

                        <div className="filter_type last">
                            <h4><a href="#filter_4" data-toggle="collapse" className="closed">Rating</a></h4>
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
                        
                        <p><a href="#0" className="btn_1 outline full-width">Filter</a></p>
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


                        <div className="promo">
                            <h3>Free Delivery for your first 14 days!</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <i className="icon-food_icon_delivery"></i>
                        </div>


                        <div className="row">
                            <div className="col-12"><h2 className="title_small">Top Rated</h2></div>
                            {
                                allProdSubCategory.map((val) => {
                                    return (
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="strip">
                                                <figure>
                                                    <span className="ribbon off">15% off</span>
                                                    <img src={val.image} className="img-fluid lazy" alt="" />
                                                    <a className="strip_info">
                                                        {/* <small>Pizza</small> */}
                                                        <div className="item_title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <div>
                                                                <h3>{val.item}</h3>
                                                                <small>{val.description}</small>
                                                            </div>
                                                            <div style={{ color: 'white', fontWeight: 'bold' }} onClick={() => addToCart(val)}><span className="addcart-item"><i className="icon_plus"></i></span></div>
                                                        </div>
                                                    </a>

                                                </figure>

                                                <ul>
                                                    <li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                                                    <li>
                                                        <div className="score"><strong>8.9</strong></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div className="pagination_fg">
                            <a >&laquo;</a>
                            <a className="active">1</a>
                            <a >2</a>
                            <a >3</a>
                            <a >4</a>
                            <a >5</a>
                            <a >&raquo;</a>
                        </div>
                    </div>

                </div>
            </div>


        </main >);
}

export default GridListingFilterscol;