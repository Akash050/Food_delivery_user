import React, { Component } from 'react';
const RestaurantDetails = () => {
    return (
        <main>
            <div className="hero_in detail_page background-image" data-background="url(img/hero_general.jpg)">
                <div className="wrapper opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">

                    <div className="container">
                        <div className="main_info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="head">
                                        <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                                    </div>
                                    <h1>Pizzeria da Alfredo</h1>
								ITALIAN - 27 Old Gloucester St, 4530 - <a
                                        href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                                        target="blank">Get directions</a>
                                </div>
                                <div className="col-xl-8 col-lg-7 col-md-6">
                                    <div className="buttons clearfix">
                                        <span className="magnific-gallery">
                                            <a href="img/detail_1.jpg" className="btn_hero" title="Photo title"
                                                data-effect="mfp-zoom-in"><i className="icon_image"></i>View photos</a>
                                            <a href="img/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                            <a href="img/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                        </span>
                                        <a href="#0" className="btn_hero wishlist"><i className="icon_heart"></i>Wishlist</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <nav className="secondary_nav sticky_horizontal">
                <div className="container">
                    <ul id="secondary_nav">
                        <li><a className="list-group-item list-group-item-action" href="#section-1">Starters</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-2">Main Courses</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-3">Desserts</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-4">Drinks</a></li>
                        <li><a className="list-group-item list-group-item-action" href="#section-5"><i
                            className="icon_chat_alt"></i>Reviews</a></li>
                    </ul>
                </div>
                <span></span>
            </nav>


            <div className="bg_gray">
                <div className="container margin_detail">
                    <div className="row">
                        <div className="col-lg-8 list_menu">
                            <section id="section-1">
                                <h4>Starters</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-1.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>1. Mexican Enchiladas</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-2.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>2. Fajitas</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-3.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>3. Royal Fajitas</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-4.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>4. Chicken Enchilada Wrap</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                </div>

                            </section>

                            <section id="section-2">
                                <h4>Main Courses</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-5.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>5. Cheese Quesadilla</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-6.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>6. Chorizo & Cheese</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-7.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>7. Beef Taco</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-8.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>8. Minced Beef Double Layer</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-9.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>9. Piri Piri Chicken</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-10.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>10. Burrito Al Pastor</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                </div>

                            </section>

                            <section id="section-3">
                                <h4>Desserts</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-5.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>5. Cheese Quesadilla</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-6.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>6. Chorizo & Cheese</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-7.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>7. Beef Taco</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-8.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>8. Minced Beef Double Layer</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-9.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>9. Piri Piri Chicken</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-10.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>10. Burrito Al Pastor</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                </div>

                            </section>

                            <section id="section-4">
                                <h4>Drinks</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-5.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>11. Coca Cola</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$2.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-6.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>12. Corona Beer</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$9.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-7.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>13. Red Wine</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$19.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-8.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>14. White Wine</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$19.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-9.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>15. Mineral Water</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$1.40</strong>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a className="menu_item modal_dialog" href="#modal-dialog">
                                            <figure><img src="img/menu-thumb-placeholder.jpg"
                                                data-src="img/menu-thumb-10.jpg" alt="thumb" className="lazy" /></figure>
                                            <h3>16. Red Bull</h3>
                                            <p>Fuisset mentitum deleniti sit ea.</p>
                                            <strong>$3.40</strong>
                                        </a>
                                    </div>
                                </div>

                            </section>

                        </div>

                        <div className="col-lg-4" id="sidebar_fixed">
                            <div className="box_order mobile_fixed">
                                <div className="head">
                                    <h3>Order Summary</h3>
                                    <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                </div>

                                <div className="main">
                                    <ul className="clearfix">
                                        <li><a href="#0">1x Enchiladas</a><span>$11</span></li>
                                        <li><a href="#0">2x Burrito</a><span>$14</span></li>
                                        <li><a href="#0">1x Chicken</a><span>$18</span></li>
                                        <li><a href="#0">2x Corona Beer</a><span>$9</span></li>
                                        <li><a href="#0">2x Cheese Cake</a><span>$11</span></li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li>Subtotal<span>$56</span></li>
                                        <li>Delivery fee<span>$10</span></li>
                                        <li className="total">Total<span>$66</span></li>
                                    </ul>
                                    <div className="row opt_order">
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
                                    </div>
                                    <div className="dropdown day">
                                        <a href="#" data-toggle="dropdown">Day <span id="selected_day"></span></a>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-menu-content">
                                                <h4>Which day delivered?</h4>
                                                <div className="radio_select chose_day">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="day_1" name="day" value="Today" />
                                                            <label for="day_1">Today<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="day_2" name="day" value="Tomorrow" />
                                                            <label for="day_2">Tomorrow<em>-40%</em></label>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown time">
                                        <a href="#" data-toggle="dropdown">Time <span id="selected_time"></span></a>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-menu-content">
                                                <h4>Lunch</h4>
                                                <div className="radio_select add_bottom_15">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="time_1" name="time" value="12.00am" />
                                                            <label for="time_1">12.00<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="time_2" name="time" value="08.30pm" />
                                                            <label for="time_2">12.30<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="time_3" name="time" value="09.00pm" />
                                                            <label for="time_3">1.00<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="time_4" name="time" value="09.30pm" />
                                                            <label for="time_4">1.30<em>-40%</em></label>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <h4>Dinner</h4>
                                                <div className="radio_select">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="time_5" name="time" value="08.00pm" />
                                                            <label for="time_1">20.00<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="time_6" name="time" value="08.30pm" />
                                                            <label for="time_2">20.30<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="time_7" name="time" value="09.00pm" />
                                                            <label for="time_3">21.00<em>-40%</em></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="time_8" name="time" value="09.30pm" />
                                                            <label for="time_4">21.30<em>-40%</em></label>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn_1_mobile">
                                        <a href="order.html" className="btn_1 gradient full-width mb_5">Order Now</a>
                                        <div className="text-center"><small>No money charged on this steps</small></div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn_reserve_fixed"><a href="#0" className="btn_1 gradient full-width">View Basket</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="container margin_30_20">
                <div className="row">
                    <div className="col-lg-8 list_menu">
                        <section id="section-5">
                            <h4>Reviews</h4>
                            <div className="row add_bottom_30 d-flex align-items-center reviews">
                                <div className="col-md-3">
                                    <div id="review_summary">
                                        <strong>8.5</strong>
                                        <em>Superb</em>
                                        <small>Based on 4 reviews</small>
                                    </div>
                                </div>
                                <div className="col-md-9 reviews_sum_details">
                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <h6>Food Quality</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 90%"
                                                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>9.0</strong></div>
                                            </div>

                                            <h6>Service</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 95%"
                                                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>9.5</strong></div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <h6>Punctuality</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 60%"
                                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>6.0</strong></div>
                                            </div>

                                            <h6>Price</h6>
                                            <div className="row">
                                                <div className="col-xl-10 col-lg-9 col-9">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style="width: 60%"
                                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-3 col-3"><strong>6.0</strong></div>
                                            </div>

                                        </div>
                                    </div> */}

                                </div>
                            </div>

                            <div id="reviews">
                                <div className="review_card">
                                    <div className="row">
                                        <div className="col-md-2 user_info">
                                            <figure><img src="img/avatar4.jpg" alt="" /></figure>
                                            <h5>Lukas</h5>
                                        </div>
                                        <div className="col-md-10 review_content">
                                            <div className="clearfix add_bottom_15">
                                                <span className="rating">8.5<small>/10</small> <strong>Rating
													average</strong></span>
                                                <em>Published 54 minutes ago</em>
                                            </div>
                                            <h4>"Great Location!!"</h4>
                                            <p>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea.
                                            Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere
                                            fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer
											petentium cu his. Tollit molestie suscipiantur his et.</p>
                                            <ul>
                                                <li><a href="#0"><i className="icon_like"></i><span>Useful</span></a></li>
                                                <li><a href="#0"><i className="icon_dislike"></i><span>Not useful</span></a>
                                                </li>
                                                <li><a href="#0"><i className="arrow_back"></i> <span>Reply</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="review_card">
                                    <div className="row">
                                        <div className="col-md-2 user_info">
                                            <figure><img src="img/avatar1.jpg" alt="" /></figure>
                                            <h5>Marika</h5>
                                        </div>
                                        <div className="col-md-10 review_content">
                                            <div className="clearfix add_bottom_15">
                                                <span className="rating">9.0<small>/10</small> <strong>Rating
													average</strong></span>
                                                <em>Published 11 Oct. 2019</em>
                                            </div>
                                            <h4>"Really great dinner!!"</h4>
                                            <p>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea.
                                            Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere
                                            fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer
											petentium cu his. Tollit molestie suscipiantur his et.</p>
                                            <ul>
                                                <li><a href="#0"><i className="icon_like"></i><span>Useful</span></a></li>
                                                <li><a href="#0"><i className="icon_dislike"></i><span>Not useful</span></a>
                                                </li>
                                                <li><a href="#0"><i className="arrow_back"></i> <span>Reply</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row reply">
                                        <div className="col-md-2 user_info">
                                            <figure><img src="img/avatar.jpg" alt="" /></figure>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="review_content">
                                                <strong>Reply from Foogra</strong>
                                                <em>Published 3 minutes ago</em>
                                                <p><br></br>Hi Monika,<br></br><br></br>Eos tollit ancillae ea, lorem consulatu qui ne, eu
                                            eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                                            veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent
                                            fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his
												et.<br></br><br></br>Thanks</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="text-right"><a href="leave-review.html" className="btn_1 gradient">Leave a Review</a>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>);
}

export default RestaurantDetails;