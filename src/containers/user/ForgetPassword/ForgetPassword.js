import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'
import { forgetPassword, registerUser } from '../../../redux/actions/authAction';
import Loading from "react-fullscreen-loading";
import * as Validator from "validatorjs";
import swal from "sweetalert";
const ForgetPassword = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [isLoding, setIsLoading] = useState(false);
    const [errorMsgMail, setErrorMsgMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPwd, setErrorConfirmPwd] = useState("");
    const onSubmit = async () => {
        resetErrorFields();
        const params = {
            email: email,
        }
        const rules = {
            email: "required|email"
        };

        let emailValidation = new Validator(params, rules, {
            url: {
                string: "Email is invalid",
            },
            required: {
                string: "Email is required",
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


        if (!emailValidation.fails()) {
            setIsLoading(true);
            const data = await dispatch(forgetPassword(params));
            if (data ? data.success === true : "") {
                console.log('data', data)
                history.push('/login')

            } else {
                setIsLoading(false);
                swal(data.message, {
                    icon: "error",
                });
            }
        }

    };

    const resetErrorFields = () => {
        setErrorMsgMail("")
        setErrorPassword("")
        setErrorConfirmPwd("")
    }
    return (
        <div id="register_bg">
            {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
            <div id="register">
                <aside >
                    <figure>
                        <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                    </figure>
                    {/* <div className="access_social">
                    </div> */}
                    <form autoComplete="off" style={{ marginTop: '200px' }}>
                        <div className="form-group">
                            <input className="form-control" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                            <i className="icon_mail_alt"></i>
                        </div>
                        <label
                            className={`error ${errorMsgMail ? null : "errorFill"} `}
                        >
                            {errorMsgMail ? errorMsgMail : null}
                        </label>
                        {/* <div className="form-group">
                            <input className="form-control" type="password" id="password1" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <label
                            className={`error ${errorPassword ? null : "errorFill"} `}
                        >
                            {errorPassword ? errorPassword : null}
                        </label> */}
                        {/* <div className="form-group">
                            <input className="form-control" type="password" id="password2" placeholder="Confirm Password" onChange={(event) => setConfirmPwd(event.target.value)} />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <label
                            className={`error ${errorConfirmPwd ? null : "errorFill"} `}
                        >
                            {errorConfirmPwd ? errorConfirmPwd : null}
                        </label> */}

                        <div id="pass-info" className="clearfix"></div>
                        <a className="btn_1 gradient full-width" onClick={() => onSubmit()}>Forget Password</a>
                        {/* <div className="text-center mt-2"><small>Already have an acccount? <strong><a href="#0" onClick={() => history.push('/login')}>Sign In</a></strong></small></div> */}
                    </form>
                    <div className="copy">© 2020 FooYes</div>
                </aside>
            </div>
        </div>
    );
}

export default ForgetPassword;