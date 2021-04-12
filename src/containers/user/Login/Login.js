import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'

const Login = () => {
    let history = useHistory();
    return (<div id="register_bg">
        <div id="register">
            <aside>
                <figure>
                    <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                </figure>
                <div class="access_social">
                    <a href="#0" class="social_bt facebook">Login with Facebook</a>
                    <a href="#0" class="social_bt google">Login with Google</a>
                </div>
                <div class="divider"><span>Or</span></div>
                <form autocomplete="off">
                    <div class="form-group">
                        <input class="form-control" type="email" placeholder="Email" />
                        <i class="icon_mail_alt"></i>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" id="password" placeholder="Password" />
                        <i class="icon_lock_alt"></i>
                    </div>
                    <div class="clearfix add_bottom_15">
                        <div class="checkboxes float-left">
                            <label class="container_check">Remember me
						  <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="float-right"><a id="forgot" href="#0">Forgot Password?</a></div>
                    </div>
                    <div class="btn_1 gradient full-width" onClick={() => history.push('/home')}>Login Now!</div>
                    <div class="text-center mt-2"><small>Don't have an acccount? <strong><div clasName="register" onClick={() => history.push('/register')}>Sign Up</div></strong></small></div>
                </form>
                <div class="copy">© 2020 FooYes</div>
            </aside>
        </div>
    </div>
    );
}

export default Login;