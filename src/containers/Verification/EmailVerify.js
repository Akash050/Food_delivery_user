import React, { useState, useEffect } from "react";
import img from "../../img/png/gmail.png"
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import swal from "sweetalert";
const EmailVerify = (props) => {
    let history = useHistory();
    const [isError, setIsError] = useState(true);
    const [message, setMessage] = useState('');
    const [classN, setClassN] = useState('');
    useEffect(() => {
        console.log("hiatory ->", history.location.search.split('=')[1])
        let payload = {
            token: history.location.search.split('=')[1]
        }
        console.log('payload', payload)
        axios.post('https://food-del-server.herokuapp.com/api/users/verify', payload)
            .then(res => {
                setMessage(res.data.message)
                if (res.data.success == true) {
                    setClassN('alert alert-success')
                }
                else {
                    setClassN('alert alert-danger')
                }
            })
            .catch(err => {
                setMessage(err.response.data.message)

            })
    }, []);

    return (
        <main class="bg_gray">
            <div id="error_page">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-7 col-lg-9">
                            <p></p>
                            <div class={classN} role="alert">
                                <h4 class="alert-heading"></h4>
                                <p>{message}</p>
                                <p class="mb-0"></p>
                            </div>
                            {/* <form method="post" action="grid-listing-filterscol.html">
                                <div class="row no-gutters custom-search-input">
                                    <div class="col-lg-10">
                                        <div class="form-group">
                                            <input class="form-control no_border_r" type="text" placeholder="What are you looking for?" />
                                        </div>
                                    </div>
                                    <div class="col-lg-2">
                                        <button class="btn_1 gradient" type="submit">Search</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default EmailVerify;