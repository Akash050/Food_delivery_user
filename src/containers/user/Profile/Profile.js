import React, { useState, useEffect } from 'react';
import userHolder from '../../../img/user-place.jpg'
import cities from '../../../components/ma.json'
import Autocomplete from "@material-ui/lab/Autocomplete";
import Loading from "react-fullscreen-loading";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser, updatePassword, updateEmail } from '../../../redux/actions/userAction';
import swal from "sweetalert";
import { updatePass } from '../../../services/user';
import { useHistory } from 'react-router';

const Profile = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [cityOptions, setCityOptions] = useState(cities);
    const [isLoding, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({

    });
    const [password, setPassword] = useState({
        old_password: '',
        new_password: '',
        confirm_password: '',
        touched: false
    });
    const [email, setEmail] = useState({
        old_email: '',
        new_email: '',
        confirm_email: '',
        touched: false
    });

    const { user } = useSelector((state) => ({
        user: state.user.user
    }));

    useEffect(() => {
        if (user == undefined) {
            return
        }
        let data = {
            first_name: user.first_name ? user.first_name : '',
            last_name: user.last_name ? user.last_name : '',
            phone_no: user.phone_no ? user.phone_no : '',
            // email: user.email ? user.email : '',
            city: user.city ? user.city : '',
            zipCode: user.zipCode ? user.zipCode : '',
            address: user.address ? user.address : '',
            profile_image: user.profile_image ? user.profile_image : '',
        }
        data.touched = false
        setFormData(data)
    }, [user]);

    useEffect(() => {
        const isLoggedInUser = localStorage.getItem('isLoggedIn')
        if(!isLoggedInUser){
            history.push('/login');
        }
        getUserProfile()
    }, []);


    let getUserProfile = async () => {
        let payload = {
            id: localStorage.id
        }
        setIsLoading(true)
        let data = await dispatch(getUser(payload));
        setIsLoading(false)
    }
    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
            touched: true
        })
    }
    let handlePasswordChange = (e) => {
        let { name, value } = e.target
        setPassword({
            ...password,
            [name]: value,
            touched: true
        })
    }
    let handleEmailChange = (e) => {
        let { name, value } = e.target
        setEmail({
            ...email,
            [name]: value,
            touched: true
        })
    }
    let handleCityChange = (e, value) => {
        if (value != null) {
            setFormData({
                ...formData,
                city: value.city
            })
        }
    }
    let updateProfile = async () => {
        if (!formData.first_name || !formData.phone_no) {
            return
        }
        setIsLoading(true)
        let payload = { ...formData }
        payload.token = localStorage.token
        let data = await dispatch(updateUser(payload));
        setIsLoading(false)
        setFormData({
            ...formData,
            touched: false
        })
        if (data.success) {
            swal(data.message, {
                icon: "success",
            });
        } else {
            swal(data.message, {
                icon: "error",
            });
        }

    }
    let onPassUpdate = async () => {
        if (!password.old_password || !password.new_password || !password.confirm_password) {
            return
        }
        if (password.new_password != password.confirm_password) {
            return
        }
        setIsLoading(true)
        let payload = {
            old_password: password.old_password,
            new_password: password.new_password,
            token: localStorage.token
        }
        let data = await dispatch(updatePassword(payload))
        setIsLoading(false)
        setPassword({
            ...password,
            touched: false
        })
        if (data.success) {
            swal(data.message, {
                icon: "success",
            });
        } else {
            swal(data.message, {
                icon: "error",
            });
        }
    }

    let onEmailUpdate = async () => {
        if (!email.old_email || !email.new_email || !email.confirm_email) {
            return
        }
        if (email.new_email != email.confirm_email) {
            return
        }
        setIsLoading(true)
        let payload = {
            old_email: email.old_email,
            new_email: email.new_email,
            token: localStorage.token
        }
        let data = await dispatch(updateEmail(payload))
        setIsLoading(false)
        setEmail({
            ...email,
            touched: false
        })
        if (data.success) {
            swal(data.message, {
                icon: "success",
            });
        } else {
            swal(data.message, {
                icon: "error",
            });
        }
    }

    return (
        <>
            {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
            <main class="bg_gray mt-0 py-5">
                <div className="container">
                    <div className="box_general padding_bottom">
                        <div className="header_box version_2">
                            <h2><i className="fa icon_profile"></i>Profile details</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Your photo</label>
                                    <div class="dz-default-dz-message">
                                        <span className="imageedit--profile-pic"><input type="file" className="fileImage--profile-upload" id="" /><i class="fas fa-user-edit"></i></span>
                                        <div className="preview--image--upload">
                                            <img className="Image--mainprofile-profile" src={userHolder} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 add_top_30">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" onChange={handleChange} value={formData.first_name} name='first_name' className="form-control" />
                                            {
                                                formData.touched && !formData.first_name ?
                                                    <div className="validation-error">
                                                        Please enter first name.
                                                    </div> :
                                                    null
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input type="text" onChange={handleChange} value={formData.last_name} name='last_name' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Phone number</label>
                                            <input type="number" onChange={handleChange} value={formData.phone_no} name='phone_no' className="form-control" />
                                            {
                                                formData.touched && !formData.phone_no ?
                                                    <div className="validation-error">
                                                        Please enter phone number.
                                                    </div> :
                                                    null
                                            }
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" value={formData.email} className="form-control" />
                                        </div>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <Autocomplete
                                                options={cityOptions}
                                                value={cityOptions.find(v => v.city == formData.city) || {}}
                                                defaultValue={'test1'}
                                                style={{ width: '100%' }}
                                                onChange={(e, v) => handleCityChange(e, v)}
                                                getOptionLabel={(option) => option.city}
                                                renderInput={(params) => (
                                                    <div
                                                        ref={params.InputProps.ref}
                                                        className="input-field-control-role-"

                                                    >
                                                        <input
                                                            style={{
                                                                width: "100%",
                                                                height: 35,
                                                                border: "1px solid rgba(0,0,0,0.1)",
                                                                borderRadius: ".25rem",
                                                                paddingLeft: "10px",
                                                            }}

                                                            {...params}
                                                            label=""
                                                            variant="outlined"
                                                            type="text"
                                                            {...params.inputProps}
                                                            required
                                                        />
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Zip Code</label>
                                            <input type="text" onChange={handleChange} value={formData.zipCode} name='zipCode' className="form-control" />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea onChange={handleChange} style={{ height: "100px" }} value={formData.address} name='address' className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 profile-update">
                                <p><button onClick={updateProfile} type="button" className="btn_1 medium">Update</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box_general padding_bottom">
                                <div className="header_box version_2">
                                    <h2><i className="fa icon_lock"></i>Change password</h2>
                                </div>
                                <div className="form-group">
                                    <label>Old password</label>
                                    <input onChange={handlePasswordChange} name='old_password' value={password.old_password} className="form-control" type="password" />
                                    {
                                        password.touched && !password.old_password ?
                                            <div className="validation-error">
                                                Please enter old password.
                                            </div> :
                                            null
                                    }


                                </div>
                                <div className="form-group">
                                    <label>New password</label>
                                    <input onChange={handlePasswordChange} name='new_password' value={password.new_password} className="form-control" type="password" />
                                    {
                                        password.touched && !password.new_password ?
                                            <div className="validation-error">
                                                Please enter new password.
                                            </div> :
                                            null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Confirm new password</label>
                                    <input onChange={handlePasswordChange} name='confirm_password' value={password.confirm_password} className="form-control" type="password" />
                                    {
                                        password.touched && !password.confirm_password ?
                                            <div className="validation-error">
                                                Please enter confirm password.
                                            </div> :
                                            null
                                    }
                                    {
                                        password.touched && password.confirm_password != password.new_password & password.confirm_password ?
                                            <div className="validation-error">
                                                Password do not match.
                                            </div> :
                                            null
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-12  profile-update">
                                        <p><button onClick={onPassUpdate} type="button" className="btn_1 medium">Update</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box_general padding_bottom">
                                <div className="header_box version_2">
                                    <h2><i className="fa icon_mail"></i>Change email</h2>
                                </div>
                                <div className="form-group">
                                    <label>Old email</label>
                                    <input className="form-control" onChange={handleEmailChange} name="old_email" value={email.old_email} id="old_email" type="email" />
                                    {
                                        email.touched && !email.old_email ?
                                            <div className="validation-error">
                                                Please enter old email.
                                            </div> :
                                            null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>New email</label>
                                    <input className="form-control" onChange={handleEmailChange} name="new_email" value={email.new_email} id="new_email" type="email" />
                                    {
                                        email.touched && !email.new_email ?
                                            <div className="validation-error">
                                                Please enter new email.
                                            </div> :
                                            null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Confirm new email</label>
                                    <input className="form-control" onChange={handleEmailChange} name="confirm_email" value={email.confirm_email} id="confirm_new_email" type="email" />
                                    {
                                        email.touched && !email.confirm_email ?
                                            <div className="validation-error">
                                                Please enter confirm email.
                                            </div> :
                                            null
                                    }
                                    {
                                        email.touched && email.confirm_email != email.new_email & email.confirm_email ?
                                            <div className="validation-error">
                                                Email do not match.
                                            </div> :
                                            null
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-12  profile-update">
                                        <p><button onClick={onEmailUpdate} type="button" className="btn_1 medium">Update</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile;