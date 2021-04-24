import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'
import { forgetPassword, resetPassword } from '../../../redux/actions/authAction';
import Loading from "react-fullscreen-loading";
import * as Validator from "validatorjs";
import swal from "sweetalert";
const ForgetPassword = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [isLoding, setIsLoading] = useState(false);
    const [verifiCode, setVerifiCode] = useState("");
    const [password, setPassword] = useState("");
    const [isForgetPass, setIsForgetPass] = useState(true);
    const [errorMsgMail, setErrorMsgMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorVerifyCode, setErrorVerifyCode] = useState("");
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
                setIsLoading(false);
                setIsForgetPass(false)

            } else {
                setIsLoading(false);
                swal(data.message, {
                    icon: "error",
                });
            }
        }

    };
    const onReset = async () => {
        resetErrorFields();
        const params = {
            token: verifiCode,
            password: password
        }
        const rules = {
            token: 'required',
            password: ['required', 'regex:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/'],
        };

        let tokenValidation = new Validator(params, rules, {
            required: {
                string: "Token is required",
            },
        });
        let passwordValidation = new Validator(params, rules, {
            required: {
                string: "Password is required",
            },
            regex: {
                string: "Your password must be have at least 1 number and 1 special Character "
            }
        });


        if (tokenValidation.fails()) {
            setIsLoading(false);

            if (tokenValidation.errors.first("token")) {
                setErrorVerifyCode(
                    tokenValidation.errors.first("token")
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

        if (!tokenValidation.fails()) {
            setIsLoading(true);
            const data = await dispatch(resetPassword(params));
            if (data ? data.success === true : "") {
                console.log('data', data)
                setIsLoading(false);
                history.push('/login')
                swal('Reset Password Successfully', {
                    icon: "success",
                });

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
        setErrorVerifyCode("")
        setErrorPassword("")
    }
    return (
        <div id="register_bg">
            {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
            <div id="register">
                <aside >
                    <figure>
                        <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                    </figure>
                    <form autoComplete="off" style={{ marginTop: '200px' }}>
                        {isForgetPass ? <><div className="form-group">
                            <input className="form-control" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                            <i className="icon_mail_alt"></i>
                        </div>
                            <label
                                className={`error ${errorMsgMail ? null : "errorFill"} `}
                            >
                                {errorMsgMail ? errorMsgMail : null}
                            </label>

                            <div id="pass-info" className="clearfix"></div>
                            <a className="btn_1 gradient full-width" onClick={() => onSubmit()}>Forget Password</a>
                        </> : <>
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
                                <input className="form-control" type="password" id="password1" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                                <i className="icon_lock_alt"></i>
                            </div>
                            <label
                                className={`error ${errorPassword ? null : "errorFill"} `}
                            >
                                {errorPassword ? errorPassword : null}
                            </label>
                            <div className="form-group">
                                <input className="form-control" type="password" id="password2" placeholder="Verification Code" onChange={(event) => setVerifiCode(event.target.value)} />
                                <i className="icon_lock_alt"></i>
                            </div>
                            <label
                                className={`error ${errorVerifyCode ? null : "errorFill"} `}
                            >
                                {errorVerifyCode ? errorVerifyCode : null}
                            </label>
                            <div id="pass-info" className="clearfix"></div>
                            <a className="btn_1 gradient full-width" onClick={() => onReset()}>Forget Password</a>
                        </>}


                        {/* <div className="text-center mt-2"><small>Already have an acccount? <strong><a href="#0" onClick={() => history.push('/login')}>Sign In</a></strong></small></div> */}
                    </form>
                    <div className="copy">© 2020 FooYes</div>
                </aside>
            </div>
        </div>
    );
}

export default ForgetPassword;