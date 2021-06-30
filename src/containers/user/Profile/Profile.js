import React, { useState , useEffect} from 'react';
import userHolder from '../../../img/user-place.jpg'
import cities from '../../../components/ma.json'
import Autocomplete from "@material-ui/lab/Autocomplete";
import Loading from "react-fullscreen-loading";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../../redux/actions/userAction';

const Profile = () => {
  
    const dispatch = useDispatch();
    const [cityOptions, setCityOptions] = useState(cities);
    const [isLoding, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({

    });

    const { user } = useSelector((state) => ({
        user: state.user.user
    }));

    useEffect(() => {
        if(user == undefined){
            return
        }
        let data = {
            first_name : user.first_name?user.first_name: '',
            last_name : user.last_name?user.last_name: '',
            phone_no : user.phone_no?user.phone_no: '',
            email : user.email?user.email: '',
            city : user.city?user.city: '',
            zipCode : user.zipCode?user.zipCode: '',
            address : user.address?user.address: '',
            profile_image : user.profile_image?user.profile_image: '',
        }
        setFormData(data)
    }, [user]);

    useEffect(() => {
        getUserProfile()
      }, []);
  

    let getUserProfile = async () => {
        let payload = {
            id : localStorage.id
        }
        setIsLoading(true)
        let data = await dispatch(getUser(payload));
        setIsLoading(false)
    }

    let handleCityChange = (e, value) => {
        if (value != null) {
            // setCartDetails({
            //     ...cartDetails,
            //     city: value.city
            // })
        }
    }
    console.log("fofof", formData)
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
                                            <input type="text" value = {formData.first_name} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input type="text" value = {formData.last_name} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Telephone</label>
                                            <input type="text" value = {formData.phone_no} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" value = {formData.email} className="form-control" />
                                        </div>
                                    </div>
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
                                            <label>Zipcode</label>
                                            <input type="number" value = {formData.phone_no} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea style={{ height: "100px" }} value = {formData.address} className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
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
                                    <input className="form-control" type="password" />
                                </div>
                                <div className="form-group">
                                    <label>New password</label>
                                    <input className="form-control" type="password" />
                                </div>
                                <div className="form-group">
                                    <label>Confirm new password</label>
                                    <input className="form-control" type="password" />
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
                                    <input className="form-control" name="old_email" id="old_email" type="email" />
                                </div>
                                <div className="form-group">
                                    <label>New email</label>
                                    <input className="form-control" name="new_email" id="new_email" type="email" />
                                </div>
                                <div className="form-group">
                                    <label>Confirm new email</label>
                                    <input className="form-control" name="confirm_new_email" id="confirm_new_email" type="email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><button type="button" className="btn_1 medium">Save</button></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile;