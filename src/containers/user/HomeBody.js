import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imagePath from '../../img/banner_bg_desktop.jpg'
import quick_del_img from '../../img/how_2.svg'
import enjoy_food_img from '../../img/how_3.svg'
import easly_ord_img from '../../img/how_1.svg'
import { useHistory } from 'react-router-dom';
import image from '../../img/home_cat_pizza.jpg'
import { allProductCategory } from '../../redux/actions/prodCategoryAction';
import { useRef } from "react";
import Loading from "react-fullscreen-loading";
import { allUser } from "../../redux/actions/vendorAction";
const HomeBody = () => {
    let ref = useRef();
    let history = useHistory();
    const dispatch = useDispatch();
    const [isLoding, setIsLoading] = useState(false);
    const [categoryList, setCategoryList] = useState("");
    const [vendorList, setVendorList] = useState("");
    const [copiedData, setCopiedData] = useState([]);
    const [halfArr, setHalfArr] = useState([]);
    const [secHalf, setSecHalf] = useState([]);
    const [half, setHalf] = useState(0);
    const [vendorListLeft, setVendorListLeft] = useState("");
    const [vendorListRight, setVendorListRight] = useState("");
    const { allProdCategory } = useSelector((state) => ({
        allProdCategory: state.productCategory,
    }));
    const { allVendors } = useSelector((state) => ({
        allVendors: state.allVendors.users
    }));
    useEffect(() => {
        async function getProductCategory() {
            setIsLoading(true)
            await dispatch(allProductCategory());
            setIsLoading(false)
        }
        getProductCategory()
    }, []);

    useEffect(() => {
        async function getUser() {
            setIsLoading(true)
            await dispatch(allUser());
            console.log(vendorList)
            setVendorList(allVendors)
            setCopiedData([...vendorList]);
            // let half = allVendors.length >>> 1;
            // setHalfArr([...copiedData.slice(0, half)]);
            // setSecHalf([...copiedData.slice(half, copiedData.length)]);
            // console.log('half', halfArr)
            // console.log('secHalf', secHalf)
            setIsLoading(false)
        }
        getUser()
    }, []);

    const splitArr = () => {

    }

    useEffect(() => {
        setCategoryList(allProdCategory)
        setVendorList(allVendors)
    }, [allProdCategory, allVendors]);

    function slide(direction) {
        var container = document.getElementById('containerd');
        let scrollCompleted = 0;
        var slideVar = setInterval(function () {
            if (direction == 'left') {
                container.scrollLeft -= 10;
            } else {
                container.scrollLeft += 10;
            }
            scrollCompleted += 10;
            console.log(scrollCompleted)
            if (scrollCompleted >= 100) {
                console.log('h')
                window.clearInterval(slideVar);
            }
        }, 50);
    }
    const onRestaurantSelect = (val) => {
        history.push({
            pathname: `/user/RestaurantDetails`,
            state: { data: val },
        })

    }
    return (
        <main>
            {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
            <div className="hero_single version_1">
                <div className="opacity-mask">
                    <div className="container">
                        <div className="row justify-content-lg-start justify-content-md-center">
                            <div className="col-xl-7 col-lg-8">
                                <h1>Delivery or Takeaway Food</h1>
                                <p>The best restaurants at the best price</p>
                                <form method="post" action="grid-listing-filterscol.html">
                                    <div className="row no-gutters custom-search-input">
                                        <div className="col-lg-10">
                                            <div className="form-group">
                                                <input className="form-control no_border_r" type="text" id="autocomplete" placeholder="Address, neighborhood..." />
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <button className="btn_1 gradient" type="submit">Search</button>
                                        </div>
                                    </div>

                                    <div className="search_trends">
                                        <h5>Trending:</h5>
                                        <ul>
                                            <li><a href="#0">Sushi</a></li>
                                            <li><a href="#0">Burgher</a></li>
                                            <li><a href="#0">Chinese</a></li>
                                            <li><a href="#0">Pizza</a></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="wave hero"></div>
            </div>


            <div className="container margin_30_60">
                <div className="main_title center">
                    <span><em></em></span>
                    <h2>Popular Categories</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                </div>

                <div class="owl-carousel owl-theme categories_carousel owl-loaded owl-drag">
                    <div class="owl-stage-outer" id="containerd">
                        <div class="owl-stage"
                            style={{ transform: "translate3d(0px,0px,0px)", transition: "all 0.25s ease 0s", width: "1800px", paddingLeft: "50px", paddingRight: "50px", display: 'flex', alignItems: 'center' }}
                        // style="transform: translate3d(0px, 0px, 0px); transition: all 0.25s ease 0s; width: 1794px; padding-left: 50px; padding-right: 50px;"
                        >
                            {
                                allProdCategory.map((val) => {
                                    return (
                                        <div class="owl-item active" style={{ width: "222px", marginRight: "20px" }}>
                                            <div class="item_version_2">
                                                <a onClick={() => history.push({
                                                    pathname: `/subcategory/${val._id}`,
                                                    state: { id: val._id },
                                                })}>
                                                    <figure>
                                                        {/* <span>98</span> */}
                                                        <img src={val.image ? val.image : image} alt="" class="owl-lazy fit-image" style={{ opacity: "1", minHeight: '285px' }} />
                                                        <div class="info">
                                                            <h3>{val.category}</h3>
                                                            <small>Avg price $40</small>
                                                        </div>
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div></div>
                    <div class="owl-nav">
                        <button type="button" role="presentation" class="owl-prev" onClick={() => slide('left')}>
                            <i class="arrow_left"></i>
                        </button>
                        <button type="button" role="presentation" class="owl-next" onClick={() => slide('right')}>
                            <i class="arrow_right"></i>
                        </button>
                    </div>
                    <div class="owl-dots disabled"></div></div>

            </div>
            <div className="bg_gray">
                <div className="container margin_60_40">
                    <div className="main_title">
                        <span><em></em></span>
                        <h2>Top Rated Restaurants</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        <a href="#0">View All &rarr;</a>
                    </div>

                    <div className="row add_bottom_25">
                        <div className="col-12">
                            <div className="list_home" >
                                <ul className="row mx-0">
                                    {
                                        allVendors && allVendors.map((val) => {
                                            return (
                                                <li className="col-12 col-lg-6" style={{ cursor: "pointer" }} onClick={() => onRestaurantSelect(val)}>
                                                    <a>
                                                        <figure>
                                                            <img src={image} data-src={image} alt="" className="lazy" width="350" height="233" />
                                                        </figure>
                                                        <div className="score"><strong>9.5</strong></div>
                                                        <em>Italian</em>
                                                        <h3>{val.first_name}</h3>
                                                        <small>8 Patriot Square E2 9NF</small>
                                                        <ul>
                                                            <li><span className="ribbon off">-30%</span></li>
                                                            <li>Average price $35</li>
                                                        </ul>
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="list_home">
                                <ul>
                                    {
                                        allVendors && halfArr.map((val) => {
                                            return (
                                                <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                                    <a>
                                                        <figure>
                                                            <img src="img/location_list_placeholder.png" data-src="img/location_list_1.jpg" alt="" className="lazy" width="350" height="233" />
                                                        </figure>
                                                        <div className="score"><strong>9.5</strong></div>
                                                        <em>Italian</em>
                                                        <h3>{val.first_name}</h3>
                                                        <small>8 Patriot Square E2 9NF</small>
                                                        <ul>
                                                            <li><span className="ribbon off">-30%</span></li>
                                                            <li>Average price $35</li>
                                                        </ul>
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div> */}
                    </div>

                    <div className="banner lazy"
                        style={{ backgroundImage: `url('${imagePath}')` }}
                    >
                        <div className="wrapper d-flex align-items-center opacity-mask" style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}>
                            <div>
                                <small>FooYes Delivery</small>
                                <h3>We Deliver to your Office</h3>
                                <p>Enjoy a tasty food in minutes!</p>
                                <div className="btn_1 gradient" onClick={() => history.push('/subcategory')}>Start Now!</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="shape_element_2">
                <div className="container margin_60_0">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="box_how">
                                        <figure><img src={easly_ord_img} alt="" width="150" height="167" className="lazy" /></figure>
                                        <h3>Easly Order</h3>
                                        <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.</p>
                                    </div>
                                    <div className="box_how">
                                        <figure><img src={quick_del_img} alt="" width="130" height="145" className="lazy" /></figure>
                                        <h3>Quick Delivery</h3>
                                        <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="box_how">
                                        <figure><img src={enjoy_food_img} alt="" width="150" height="132" className="lazy" /></figure>
                                        <h3>Enjoy Food</h3>
                                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center mt-3 d-block d-lg-none"><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register Now!</a></p>
                        </div>
                        <div className="col-lg-5 offset-lg-1 align-self-center">
                            <div className="intro_txt">
                                <div className="main_title">
                                    <span><em></em></span>
                                    <h2>Start Ordering Now</h2>
                                </div>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>);
}

export default HomeBody;