import React from 'react';
const LeaveReview = () => {
    return (<main className="bg_gray">
        <div className="container margin_60_20">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="box_general write_review">
                        <h1 className="add_bottom_15">Write a review for "Pizzeria Da Alfredo"</h1>
                        <label className="d-block add_bottom_15">Overall rating</label>
                        <div className="row">
                            <div className="col-md-3 add_bottom_25">
                                <div className="add_bottom_15">Food Quality <strong className="food_quality_val"></strong></div>
                                <input type="range" min="0" max="10" step="1" value="0" data-orientation="horizontal" id="food_quality" className="food_quality_rng" name="food_quality" />
                                <div class="rangeslider rangeslider--horizontal" id="js-rangeslider-0">
                                    <div class="rangeslider__fill" style={{ width: "10px" }}>
                                    </div>
                                    <div class="rangeslider__handle" style={{ left: "0px" }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 add_bottom_25">
                                <div className="add_bottom_15">Service <strong className="service_val"></strong></div>
                                <input type="range" min="0" max="10" step="1" value="0" data-orientation="horizontal" id="service" className="food_quality_rng" name="service" />
                                <div class="rangeslider rangeslider--horizontal" id="js-rangeslider-0">
                                    <div class="rangeslider__fill" style={{ width: "10px" }}>
                                    </div>
                                    <div class="rangeslider__handle" style={{ left: "0px" }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 add_bottom_25">
                                <div className="add_bottom_15">Punctuality <strong className="location_val"></strong></div>
                                <input type="range" min="0" max="10" step="1" value="0" data-orientation="horizontal" id="location" className="food_quality_rng" name="location" />
                                <div class="rangeslider rangeslider--horizontal" id="js-rangeslider-0">
                                    <div class="rangeslider__fill" style={{ width: "10px" }}>
                                    </div>
                                    <div class="rangeslider__handle" style={{ left: "0px" }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 add_bottom_25">
                                <div className="add_bottom_15">Price <strong className="price_val"></strong></div>
                                <input type="range" min="0" max="10" step="1" value="0" data-orientation="horizontal" id="price" className="food_quality_rng" name="price" />
                                <div class="rangeslider rangeslider--horizontal" id="js-rangeslider-0">
                                    <div class="rangeslider__fill" style={{ width: "10px" }}>
                                    </div>
                                    <div class="rangeslider__handle" style={{ left: "0px" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Title of your review</label>
                            <input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
                        </div>
                        <div className="form-group">
                            <label>Your review</label>
                            <textarea className="form-control" style={{ height: "180px" }} placeholder="Write your review to help others learn about this online business"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Add your photo (optional)</label>
                            <div className="fileupload"><input type="file" name="fileupload" accept="image/*" /></div>
                        </div>
                        <div className="form-group">
                            <div className="checkboxes float-left add_bottom_15 add_top_15">
                                <label className="container_check">Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his.
                                <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <a href="confirm.html" className="btn_1">Submit review</a>
                    </div>
                </div>
            </div>
        </div>
    </main>);
}

export default LeaveReview;