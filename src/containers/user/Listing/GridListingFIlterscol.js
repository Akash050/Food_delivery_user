import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Loading from "react-fullscreen-loading";
import { allProductSubCategory, productSubCatByCategoryId } from "../../../redux/actions/prodSubCategoryAction";
const GridListingFilterscol = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [id, setId] = useState(props.location.state.id);
    console.log(props.location.state.id)
    const [isLoding, setIsLoading] = useState(false);
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
    return (
        <main>
            {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
            <div class="page_header element_to_stick">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
                            <h1>145 restaurants in Convent Street 2983</h1>
                            <a href="#0">Change address</a>
                        </div>
                        <div class="col-xl-4 col-lg-5 col-md-5">
                            <div class="search_bar_list">
                                <input type="text" class="form-control" placeholder="Dishes, restaurants or cuisines" />
                                <button type="submit"><i class="icon_search"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container margin_30_20">
                <div class="row">


                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="title_small">Top Categories</h2>
                                <div class="owl-carousel owl-theme categories_carousel_in listing">
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_1.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Pizza</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_2.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Sushi</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_3.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Dessert</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_4.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Hamburgher</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_5.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Ice Cream</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_6.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Kebab</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_7.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Italian</h3></a>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_8.jpg" alt="" class="owl-lazy" />
                                            <a href="#0"><h3>Chinese</h3></a>
                                        </figure>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="promo">
                            <h3>Free Delivery for your first 14 days!</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <i class="icon-food_icon_delivery"></i>
                        </div>


                        <div class="row">
                            <div class="col-12"><h2 class="title_small">Top Rated</h2></div>
                            {
                                allProdSubCategory.map((val) => {
                                    return (
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div class="strip">
                                                <figure>
                                                    <span class="ribbon off">15% off</span>
                                                    <img src={val.image} class="img-fluid lazy" alt="" />
                                                    <a class="strip_info">
                                                        {/* <small>Pizza</small> */}
                                                        <div class="item_title">
                                                            <h3>{val.item}</h3>
                                                            <small>{val.description}</small>
                                                        </div>
                                                    </a>

                                                </figure>

                                                <ul>
                                                    <li><span class="take yes">Takeaway</span> <span class="deliv yes">Delivery</span></li>
                                                    <li>
                                                        <div class="score"><strong>8.9</strong></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div class="pagination_fg">
                            <a >&laquo;</a>
                            <a class="active">1</a>
                            <a >2</a>
                            <a >3</a>
                            <a >4</a>
                            <a >5</a>
                            <a >&raquo;</a>
                        </div>
                    </div>

                </div>
            </div>


        </main>);
}

export default GridListingFilterscol;