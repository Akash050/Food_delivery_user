import React, { useState } from 'react';
import userHolder from '../../../img/user-place.jpg'
const Profile = () => {
    return (
        <>
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
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder="Your last name" />
                                        </div>
                                    </div>
                                </div>                        
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Telephone</label>
                                            <input type="text" className="form-control" placeholder="Your telephone number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Your email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Personal info</label>
                                            <textarea style={{height: "100px"}} className="form-control" placeholder="Personal info"></textarea>
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