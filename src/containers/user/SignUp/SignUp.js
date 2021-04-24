import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'
import { registerUser } from '../../../redux/actions/authAction';
import Loading from "react-fullscreen-loading";
import * as Validator from "validatorjs";
import swal from "sweetalert";
const SignUp = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [isLoding, setIsLoading] = useState(false);
    const [errorMsgName, setErrorMsgName] = useState("");
    const [errorMsgMail, setErrorMsgMail] = useState("");
    const [errorMsgLastName, setErrorMsgLastName] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPwd, setErrorConfirmPwd] = useState("");
    const onSubmit = async () => {
        resetErrorFields();
        const params = {
            email: email,
            password: password,
            first_name: name,
            last_name: lastName
        }
        const rules = {
            email: "required|email",
            password: ['required', 'regex:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/'],
            first_name: "required",
            last_name: "required"

        };
        let nameValidation = new Validator(params, rules, {
            required: {
                string: "Name is required",
            },
        });
        let lastNameValidation = new Validator(params, rules, {
            required: {
                string: "Last Name is required",
            },
        });
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
            regex: {
                string: "Your password must be have at least 1 number and 1 special Character "
            }
        });
        if (nameValidation.fails()) {
            setIsLoading(false);

            if (nameValidation.errors.first("first_name")) {
                setErrorMsgName(
                    nameValidation.errors.first("first_name")
                );
            }
        }
        if (lastNameValidation.fails()) {
            setIsLoading(false);

            if (lastNameValidation.errors.first("last_name")) {
                setErrorMsgLastName(
                    lastNameValidation.errors.first("last_name")
                );
            }
        }
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
        if (confirmPwd !== "") {
            if (checkConfirmPwd() && !nameValidation.fails()) {
                setIsLoading(true);
                const data = await dispatch(registerUser(params));
                if (data ? data.success === true : "") {
                    console.log('data', data)
                    history.push('/login')
                    swal('A verification link has sent to your mail ', {
                        icon: "success",
                    });
                } else {
                    setIsLoading(false);
                    swal(data.message, {
                        icon: "error",
                    });
                }
            }

        }
        else {
            console.log('confirm', confirmPwd)
            setErrorConfirmPwd('Confirm Password is required')
        }
    };
    const checkConfirmPwd = () => {
        if (password === confirmPwd) {
            return true;
        }
        else {
            swal('Password does not match', {
                icon: "error",
            });
            return false;
        }
    }
    const resetErrorFields = () => {
        setErrorMsgMail("")
        setErrorMsgName("")
        setErrorPassword("")
        setErrorMsgLastName("")
        setErrorConfirmPwd("")
    }
    return (
        <div id="register_bg">
            {isLoding ? <Loading loading loaderColor="#3498db" /> : null}
            <div id="register">
                <aside>
                    <figure>
                        <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                    </figure>
                    <div className="access_social">
                        {/* <a href="#0" className="social_bt facebook">Register with Facebook</a>
                        <a href="#0" className="social_bt google">Register with Google</a> */}
                    </div>
                    {/* <div className="divider"><span>Or</span></div> */}
                    <form autoComplete="off">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
                            <i className="icon_pencil-edit"></i>
                        </div>
                        <label
                            className={`error ${errorMsgName ? null : "errorFill"} `}
                        >
                            {errorMsgName ? errorMsgName : null}
                        </label>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)} />
                            <i className="icon_pencil-edit"></i>
                        </div>
                        <label
                            className={`error ${errorMsgLastName ? null : "errorFill"} `}
                        >
                            {errorMsgLastName ? errorMsgLastName : null}
                        </label>
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
                            <input className="form-control" type="password" id="password2" placeholder="Confirm Password" onChange={(event) => setConfirmPwd(event.target.value)} />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <label
                            className={`error ${errorConfirmPwd ? null : "errorFill"} `}
                        >
                            {errorConfirmPwd ? errorConfirmPwd : null}
                        </label>

                        <div id="pass-info" className="clearfix"></div>
                        <a className="btn_1 gradient full-width" onClick={() => onSubmit()}>Register Now!</a>
                        <div className="text-center mt-2"><small>Already have an acccount? <strong><a style={{ cursor: 'pointer', color: '#0000FF' }} onClick={() => history.push('/login')}>Sign In</a></strong></small></div>
                    </form>
                    <div className="copy">© 2020 FooYes</div>
                </aside>
            </div>
        </div>
    );
}

export default SignUp;