import React, { useState, useEffect } from "react";
import img from "../../img/png/gmail.png"
import contactBanner from "../../img/contact-banner.jpg"
import { useDispatch, useSelector } from "react-redux";
import { contact } from "../../redux/actions/userAction";
import Loading from "react-fullscreen-loading";
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import swal from "sweetalert";
const Contact = (props) => {
    let dispatch = useDispatch();
    const [isLoding, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
        touched: false
    });
    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    let reset = () => {
        setFormData({
            email: '',
            name: '',
            message: '',
            touched: false
        })
    }
    let onSend = async(e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) {
            setFormData({
                ...formData,
                touched: true
            })
            return
        }
        setIsLoading(true)
        let data = await dispatch(contact(formData));
        if(data.success){
            swal({
                title: "Success",
                text: 'Email sent successfully',
                icon: "success",
                button: "ok",
            });
        }else{
            swal({
                title: "Error",
                text: data.message,
                icon: "error",
                button: "ok",
            });
        }
        reset()
        setIsLoading(false)
    }

    return (

        <main>
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            <div className="hero_single inner_pages background-image" style={{ backgroundImage: `url(${contactBanner})` }}>
                <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10 col-md-8">
                                <h1>Contact FooYes</h1>
                                <p>A successful restaurant experience</p>
                            </div>
                        </div>
                        {/* /row */}
                    </div>
                </div>
                <div className="wave gray hero" />
            </div>
            {/* /hero_single */}
            <div className="bg_gray">
                <div className="container margin_60_40">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="box_contacts">
                                <i className="icon_lifesaver" />
                                <h2>Help Center</h2>
                                <a href="tel:+9442323221">+94 423-23-221</a> - <a href="mailto:help@fooyes.com">help@fooyes.com</a><br />
                                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_contacts">
                                <i className="icon_pin_alt" />
                                <h2>Address</h2>
                                <div>6th Forrest Ray, London - 10001 UK</div>
                                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_contacts">
                                <i className="icon_cloud-upload_alt" />
                                <h2>Submissions</h2>
                                <a href="tel:+9442323221">+94 423-23-221</a> - <a href="mailto:order@fooyes.com">order@fooyes.com</a><br/>
                                <small>MON to FRI9am-6pmSAT 9am-2pm</small>
                            </div>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /bg_gray */}
            <div className="container margin_60_20">
                <h5 className="mb_5">Drop Us a Line</h5>
                <div className="row">
                    <div className="col-lg-4 col-md-6 add_bottom_25">
                        <div id="message-contact" />
                        <form id="contactform" autoComplete="off">
                            <div className="form-group">
                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" placeholder="Name" value={formData.name} name="name" />
                                {
                                    formData.touched && !formData.name ?
                                        <div className="validation-error">
                                            Please enter first name.
                                        </div> :
                                        null
                                }
                            </div>
                            <div className="form-group">
                                <input onChange={(e) => handleChange(e)} className="form-control" type="email" placeholder="Email" value={formData.email} name="email" />
                                {
                                    formData.touched && !formData.email ?
                                        <div className="validation-error">
                                            Please enter first email.
                                        </div> :
                                        null
                                }
                            </div>
                            <div className="form-group">
                                <textarea onChange={(e) => handleChange(e)} className="form-control" style={{ height: '150px' }} placeholder="Message" value={formData.message} name="message" />
                                {
                                    formData.touched && !formData.message ?
                                        <div className="validation-error">
                                            Please enter first message.
                                        </div> :
                                        null
                                }
                            </div>
                            {/* <div className="form-group">
                                <input className="form-control" type="text" id="verify_contact" name="verify_contact" placeholder="Are you human? 3 + 1 =" />
                            </div> */}
                            <div onClick={(e) => onSend(e)} className="form-group">
                                <input className="btn_1 gradient full-width" type="submit" defaultValue="Submit" id="submit-contact" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-8 col-md-6 add_bottom_25">
                        <iframe className="map_contact mapContact--loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39714.47749917409!2d-0.13662037019554393!3d51.52871971170425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C+Regno+Unito!5e0!3m2!1sit!2ses!4v1557824540343!5m2!1sit!2ses" allowFullScreen />
                    </div>
                </div>
            </div>
            {/* /row */}
            {/* /container */}
        </main>
    );
}

export default Contact;