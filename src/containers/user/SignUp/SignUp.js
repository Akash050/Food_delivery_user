import React from 'react';
import logo from '../../../img/logo_sticky.svg'
const SignUp = () => {
    return (
        <div id="register_bg">

            <div id="register">
                <aside>
                    <figure>
                        <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                    </figure>
                    <div class="access_social">
                        <a href="#0" class="social_bt facebook">Register with Facebook</a>
                        <a href="#0" class="social_bt google">Register with Google</a>
                    </div>
                    <div class="divider"><span>Or</span></div>
                    <form autocomplete="off">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Name" />
                            <i class="icon_pencil-edit"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Last Name" />
                            <i class="icon_pencil-edit"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="Email" />
                            <i class="icon_mail_alt"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" id="password1" placeholder="Password" />
                            <i class="icon_lock_alt"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" id="password2" placeholder="Confirm Password" />
                            <i class="icon_lock_alt"></i>
                        </div>
                        <div id="pass-info" class="clearfix"></div>
                        <a href="#0" class="btn_1 gradient full-width">Register Now!</a>
                        <div class="text-center mt-2"><small>Already have an acccount? <strong><a href="#0">Sign In</a></strong></small></div>
                    </form>
                    <div class="copy">© 2020 FooYes</div>
                </aside>
            </div>
        </div>
    );
}

export default SignUp;