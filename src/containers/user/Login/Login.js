import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'
import { loginUser } from '../../../redux/actions/authAction';

const Login = () => {
    let history = useHistory();
    let dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const onSubmit = async () => {
        setErrorMsg("")
        const params = {
            email: email,
            password: password,

        }
        if (email && password) {
            const data = await dispatch(loginUser(params));
            console.log('data', data)
            if (data ? data.success === true : "") {
                console.log('daaattaa', data)
                history.push('/home')
            } else {
                setErrorMsg(data.message);
            }
        }
        else {
            setErrorMsg('Fields are empty');
        }
    };
    return (<div id="register_bg">
        <div id="register">
            <aside>
                <figure>
                    <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                </figure>
                <div className="access_social">
                    <a href="#0" className="social_bt facebook">Login with Facebook</a>
                    <a href="#0" className="social_bt google">Login with Google</a>
                </div>
                <div className="divider"><span>Or</span></div>
                <form autoComplete="off">
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                        <i className="icon_mail_alt"></i>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                        <i className="icon_lock_alt"></i>
                    </div>
                    <label
                        className={`error ${errorMsg ? null : "errorFill"} `}
                    >
                        {errorMsg ? errorMsg : null}
                    </label>
                    <div className="clearfix add_bottom_15">
                        <div className="checkboxes float-left">
                            <label className="container_check">Remember me
						  <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="float-right"><a id="forgot" href="#0">Forgot Password?</a></div>
                    </div>
                    <div className="btn_1 gradient full-width" onClick={() => onSubmit()}>Login Now!</div>
                    <div className="text-center mt-2" style={{ cursor: "pointer" }}><small>Don't have an acccount? <strong><div className="register" onClick={() => history.push('/register')} >Sign Up</div></strong></small></div>
                </form>
                <div className="copy">© 2020 FooYes</div>
            </aside>
        </div>
    </div>
    );
}

export default Login;