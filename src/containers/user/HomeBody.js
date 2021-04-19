import React from 'react';
import popular_cat1 from '../../img/home_cat_placeholder.jpg'
import imagePath from '../../img/banner_bg_desktop.jpg'
import quick_del_img from '../../img/how_2.svg'
import enjoy_food_img from '../../img/how_3.svg'
import easly_ord_img from '../../img/how_1.svg'
import { useHistory } from 'react-router-dom';
import image from '../../img/home_cat_pizza.jpg'
const HomeBody = () => {
    let history = useHistory();
    return (
        <main>
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
                    <div class="owl-stage-outer">
                        <div class="owl-stage"
                            style={{ transform: "translate3d(0px,0px,0px)", transition: "all 0.25s ease 0s", width: "1794px", paddingLeft: "50px", paddingRight: "50px" }}
                        // style="transform: translate3d(0px, 0px, 0px); transition: all 0.25s ease 0s; width: 1794px; padding-left: 50px; padding-right: 50px;"
                        ><div class="owl-item active"
                            style={{ width: "222px", marginRight: "20px" }}
                        >
                                <div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>98</span>
                                            <img src={image} data-src="img/home_cat_pizza.jpg" alt="" class="owl-lazy" width="350" height="450" style={{ opacity: "1" }} />
                                            <div class="info">
                                                <h3>Pizza</h3>
                                                <small>Avg price $40</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div><div class="owl-item active" style={{ width: "222px", marginRight: "20px" }}><div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>87</span>
                                            <img src={image} data-src="img/home_cat_sushi.jpg" alt="" class="owl-lazy" width="350" height="450" style={{ opacity: "1" }} />
                                            <div class="info">
                                                <h3>Japanese</h3>
                                                <small>Avg price $50</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div><div class="owl-item active" style={{ width: "222px", marginRight: "20px" }}><div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>55</span>
                                            <img src={image} data-src="img/home_cat_hamburgher.jpg" alt="" class="owl-lazy" width="350" height="450" style={{ opacity: "1" }} />
                                            <div class="info">
                                                <h3>Burghers</h3>
                                                <small>Avg price $55</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div><div class="owl-item active" style={{ width: "222px", marginRight: "20px" }}><div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>55</span>
                                            <img src={image} data-src="img/home_cat_vegetarian.jpg" alt="" class="owl-lazy" width="350" height="450" style={{ opacity: "1" }} />
                                            <div class="info">
                                                <h3>Vegetarian</h3>
                                                <small>Avg price $40</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div><div class="owl-item active" style={{ width: "222px", marginRight: "20px" }}><div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>65</span>
                                            <img src={image} data-src="img/home_cat_bakery.jpg" alt="" class="owl-lazy" width="350" height="450" style={{ opacity: "1" }} />
                                            <div class="info">
                                                <h3>Bakery</h3>
                                                <small>Avg price $60</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div><div class="owl-item" style={{ width: "222px", marginRight: "20px" }}><div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>25</span>
                                            <img src={image} data-src="img/home_cat_chinesse.jpg" alt="" class="owl-lazy" width="350" height="450" style={{ opacity: "1" }} />
                                            <div class="info">
                                                <h3>Chinese</h3>
                                                <small>Avg price $40</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div><div class="owl-item" style={{ width: "222px", marginRight: "20px" }}><div class="item_version_2">
                                    <a onClick={() => history.push('/GridListingFilterscol')}>
                                        <figure>
                                            <span>35</span>
                                            <img src={image} data-src="img/home_cat_mexican.jpg" alt="" class="owl-lazy" width="350" height="450" />
                                            <div class="info">
                                                <h3>Mexican</h3>
                                                <small>Avg price $35</small>
                                            </div>
                                        </figure>
                                    </a>
                                </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><i class="arrow_left"></i></button><button type="button" role="presentation" class="owl-next"><i class="arrow_right"></i></button></div><div class="owl-dots disabled"></div></div>

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
                        <div className="col-lg-6">
                            <div className="list_home">
                                <ul>
                                    <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                        <a>
                                            <figure>
                                                <img src="img/location_list_placeholder.png" data-src="img/location_list_1.jpg" alt="" className="lazy" width="350" height="233" />
                                            </figure>
                                            <div className="score"><strong>9.5</strong></div>
                                            <em>Italian</em>
                                            <h3>La Monnalisa</h3>
                                            <small>8 Patriot Square E2 9NF</small>
                                            <ul>
                                                <li><span className="ribbon off">-30%</span></li>
                                                <li>Average price $35</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                        <a >
                                            <figure>
                                                <img src="img/location_list_placeholder.png" data-src="img/location_list_2.jpg" alt="" className="lazy" width="350" height="233" />
                                            </figure>
                                            <div className="score"><strong>8.0</strong></div>
                                            <em>Mexican</em>
                                            <h3>Alliance</h3>
                                            <small>27 Old Gloucester St, 4563</small>
                                            <ul>
                                                <li><span className="ribbon off">-40%</span></li>
                                                <li>Average price $30</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                        <a >
                                            <figure>
                                                <img src="img/location_list_placeholder.png" data-src="img/location_list_3.jpg" alt="" className="lazy" width="350" height="233" />
                                            </figure>
                                            <div className="score"><strong>9.0</strong></div>
                                            <em>Sushi - Japanese</em>
                                            <h3>Sushi Gold</h3>
                                            <small>Old Shire Ln EN9 3RX</small>
                                            <ul>
                                                <li><span className="ribbon off">-25%</span></li>
                                                <li>Average price $20</li>
                                            </ul>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="list_home">
                                <ul>
                                    <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                        <a >
                                            <figure>
                                                <img src="img/location_list_placeholder.png" data-src="img/location_list_4.jpg" alt="" className="lazy" width="350" height="233" />
                                            </figure>
                                            <div className="score"><strong>9.5</strong></div>
                                            <em>Vegetarian</em>
                                            <h3>Mr. Pepper</h3>
                                            <small>27 Old Gloucester St, 4563</small>
                                            <ul>
                                                <li><span className="ribbon off">-30%</span></li>
                                                <li>Average price $20</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                        <a >
                                            <figure>
                                                <img src="img/location_list_placeholder.png" data-src="img/location_list_5.jpg" alt="" className="lazy" width="350" height="233" />
                                            </figure>
                                            <div className="score"><strong>8.0</strong></div>
                                            <em>Chinese</em>
                                            <h3>Dragon Tower</h3>
                                            <small>22 Hertsmere Rd E14 4ED</small>
                                            <ul>
                                                <li><span className="ribbon off">-50%</span></li>
                                                <li>Average price $35</li>
                                            </ul>
                                        </a>
                                    </li>
                                    <li style={{ cursor: "pointer" }} onClick={() => history.push('/user/RestaurantDetails')}>
                                        <a >
                                            <figure>
                                                <img src="img/location_list_placeholder.png" data-src="img/location_list_6.jpg" alt="" className="lazy" width="350" height="233" />
                                            </figure>
                                            <div className="score"><strong>8.5</strong></div>
                                            <em>Pizza - Italian</em>
                                            <h3>Bella Napoli</h3>
                                            <small>135 Newtownards Road BT4</small>
                                            <ul>
                                                <li><span className="ribbon off">-45%</span></li>
                                                <li>Average price $25</li>
                                            </ul>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="banner lazy"
                        style={{ backgroundImage: `url('${imagePath}')` }}
                    >
                        <div className="wrapper d-flex align-items-center opacity-mask" style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}>
                            <div>
                                <small>FooYes Delivery</small>
                                <h3>We Deliver to your Office</h3>
                                <p>Enjoy a tasty food in minutes!</p>
                                <div className="btn_1 gradient" onClick={() => history.push('/GridListingFilterscol')}>Start Now!</div>
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