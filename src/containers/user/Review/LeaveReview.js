import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { addReview } from '../../../redux/actions/review';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
const LeaveReview = (props) => {
    let data = props.location.state.data
    let history = useHistory();
    const [isLoding, setIsLoading] = useState(false);
    let dispatch = useDispatch();
    let [flag, setFlag] = useState(false)
    let [formData, setFormData] = useState({
        rating: '',
        title: '',
        review: ''
    })
    const ratingChanged = (newRating) => {
        setFormData({
            ...formData,
            rating: newRating
        })
    };
    let resetfield = () =>{
        setFormData({
            ...setFormData,
            title: '',
            review: '',
            rating:''
        })
    }
    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async () => {
        setIsLoading(true)
        let payload = {
            title: formData.title,
            review: formData.review,
            rating: formData.rating,
            vendorId: props.location.state.data._id,
            userId: localStorage.id
        }
        let data = await dispatch(addReview(payload))
        if (data.success) {
            setFlag(true)
            setIsLoading(false)
            resetfield()
        } else {
            swal({
                title: "Error",
                text: data.message,
                icon: "error",
                button: 'ok'
            });
            setIsLoading(false)
        }
    }

    return (
        <main className="bg_gray">
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            {!flag ?
                <div className="container margin_60_20">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="box_general write_review">
                                <h1 className="add_bottom_15">Write a review for {data.first_name}{data.last_name}</h1>
                                {/* <label className="d-block add_bottom_15">Overall rating</label> */}
                                <div className="form-group">
                                    <label>Title of your review</label>
                                    <input className="form-control" type="text" name="title" value={formData.title} onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Your review</label>
                                    <textarea className="form-control" name="review" style={{ height: "180px" }} value={formData.review} onChange={(e) => handleChange(e)} ></textarea>
                                </div>
                                <ReactStars
                                    classNames="review-rating"
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                <div onClick={handleSubmit} className="btn_1">Submit review</div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div class="box_order_form">
                            <div class="head text-center">
                                <h3>{data.first_name}'s Kitchen</h3>
                                {data.area}, {data.city}
                            </div>
                            <div class="main">
                                <div id="confirm">
                                    <div class="icon icon--order-success svg add_bottom_15">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                                            <g fill="none" stroke="#8EC343" stroke-width="2">
                                                <circle cx="36" cy="36" r="35" style={{ strokeDasharray: "240px 240px", strokeDashoffset: "480px" }}></circle>
                                                <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: "50px 50px", strokeDashoffset: "0px" }}></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <h3>Review Sumbitted!</h3>
                                    {/* <p>Sit an meis aliquam, cetero inermis.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}

export default LeaveReview;