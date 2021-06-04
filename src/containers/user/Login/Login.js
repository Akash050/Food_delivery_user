import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'
import { loginUser } from '../../../redux/actions/authAction';
import * as Validator from "validatorjs";
import Loading from "react-fullscreen-loading";
import swal from "sweetalert";
import { GoogleLogin } from 'react-google-login';
const Login = () => {
    let history = useHistory();
    let dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgMail, setErrorMsgMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [isLoding, setIsLoading] = useState(false);

    const responseGoogle = (response) => {
        console.log('hey', response);
        if (response.error) {
            // swal(response.error, {
            //     icon: "error",
            // });
        }
        else {
            localStorage.setItem("isLoggedIn", true);
            history.push('/home')
        }
    }
    const onSubmit = async () => {
        setErrorPassword("")
        setErrorMsgMail("")
        setErrorMsg("")
        const params = {
            email: email,
            password: password,
        }
        const rules = {
            email: "required|email",
            password: 'required',
        };

        let emailValidation = new Validator(params, rules, {
            url: {
                string: "Email is invalid",
            },
            required: {
                string: "Email is required",
            },
        });
        let passwordValidation = new Validator(params, rules, {
            required: {
                string: "Password is required",
            },

        });

        if (emailValidation.fails()) {
            setIsLoading(false);

            if (emailValidation.errors.first("email")) {
                setErrorMsgMail(
                    emailValidation.errors.first("email")
                );
            }
        }
        if (passwordValidation.fails()) {
            setIsLoading(false);
            console.log(passwordValidation);
            if (passwordValidation.errors.first("password")) {
                setErrorPassword(
                    passwordValidation.errors.first("password")
                );
            }
        }
        if (!emailValidation.fails()) {
            setIsLoading(true);
            const data = await dispatch(loginUser(params));
            console.log('data', data)
            if (data ? data.success === true : "") {
                console.log('daaattaa', data)
                history.push('/home')
            } else {
                setIsLoading(false);
                swal(data ? data.message : "", {
                    icon: "error",
                });
            }
        }

    };
    return (<div id="register_bg">
        {isLoding ? <Loading loading loaderColor="#f3723b" /> : null}
        <div id="register">
            <aside>
                <figure>
                    <a ><img src={logo} width="140" height="35" alt="" /></a>
                </figure>
                {/* <GoogleLogin
                    clientId="400865530457-pelm0k6er8vqgldvr7vetekf2rqnii0d.apps.googleusercontent.com"
                    render={renderProps => (
                        <div className="access_social" onClick={renderProps.onClick}>
                            <a className="social_bt google">Login with Google</a>
                            <button style={{ display: 'none' }}  ></button>
                        </div>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                /> */}

                {/* <div className="divider"><span>Or</span></div> */}
                <form autoComplete="off">
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                        <i className="icon_mail_alt"></i>
                    </div>
                    <label
                        className={`error ${errorMsgMail ? null : "errorFill"} `}
                    >
                        {errorMsgMail ? errorMsgMail : null}
                    </label>
                    <div className="form-group">
                        <input className="form-control" type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                        <i className="icon_lock_alt"></i>
                    </div>
                    <label
                        className={`error ${errorPassword ? null : "errorFill"} `}
                    >
                        {errorPassword ? errorPassword : null}
                    </label>
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
                        <div className="float-right"><a id="forgot" onClick={() => history.push('/forgetPassword')}>Forgot Password?</a></div>
                    </div>
                    <div className="btn_1 gradient full-width" onClick={() => onSubmit()}>Login Now!</div>
                    <div className="text-center mt-2" style={{ cursor: "pointer" }}><small>Don't have an acccount? <strong><a className="register" style={{ cursor: 'pointer', color: '#0000FF' }} onClick={() => history.push('/register')} >Sign Up</a></strong></small></div>
                </form>
                <div className="copy">© 2020 FooYes</div>
            </aside>
        </div>
    </div>
    );
}

export default Login;