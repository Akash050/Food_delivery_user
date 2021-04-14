import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../img/logo_sticky.svg'
import { loginUser, registerUser } from '../../../redux/actions/authAction';

const SignUp = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const onSubmit = async () => {

        const params = {
            email: email,
            password: password,
            first_name: name,
            last_name: lastName
        }
        if (checkConfirmPwd()) {
            const data = await dispatch(registerUser(params));
            if (data ? data.success === true : "") {
                console.log('data', data)
                history.push('/login')
            } else {
                // setErrorMsg(data.message);
            }
        }
    };
    const checkConfirmPwd = () => {
        if (password == confirmPwd) {
            return true;
        }
        else {
            return false;
        }
    }
    return (
        <div id="register_bg">
            <div id="register">
                <aside>
                    <figure>
                        <a href="index.html"><img src={logo} width="140" height="35" alt="" /></a>
                    </figure>
                    <div className="access_social">
                        <a href="#0" className="social_bt facebook">Register with Facebook</a>
                        <a href="#0" className="social_bt google">Register with Google</a>
                    </div>
                    <div className="divider"><span>Or</span></div>
                    <form autoComplete="off">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
                            <i className="icon_pencil-edit"></i>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)} />
                            <i className="icon_pencil-edit"></i>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                            <i className="icon_mail_alt"></i>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" id="password1" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" id="password2" placeholder="Confirm Password" onChange={(event) => setConfirmPwd(event.target.value)} />
                            <i className="icon_lock_alt"></i>
                        </div>
                        <div id="pass-info" className="clearfix"></div>
                        <a className="btn_1 gradient full-width" onClick={() => onSubmit()}>Register Now!</a>
                        <div className="text-center mt-2"><small>Already have an acccount? <strong><a href="#0" onClick={() => history.push('/login')}>Sign In</a></strong></small></div>
                    </form>
                    <div className="copy">© 2020 FooYes</div>
                </aside>
            </div>
        </div>
    );
}

export default SignUp;