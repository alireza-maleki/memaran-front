import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import classes from "./Login.module.scss";

import vec2 from "../../images/Vector2.png";
import vec3 from "../../images/Vector3.png";
import vec4 from "../../images/Vector4.png";
import vec5 from "../../images/Vector5.png";

import group from "../../images/Group1.png";

import logo1 from "../../images/Group2.png";
import logo2 from "../../images/Vector1.png";



const Login = (props) => {

    const navigate = useNavigate();


    const [uName, setUName] = useState('');
    const [uPassword, setUPassword] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [userToken, setUserToken] = useState();


    const userNameHandler = (e) => {
        setUName(e.target.value);
    }

    const userPasswordHandler = (e) => {
        setUPassword(e.target.value);
    }

    // === ===
    useEffect(() => {
        if (!uName || !uPassword) {
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
        }

        localStorage.removeItem("user-token");
    }, [uName, uPassword])


    const formSubmitHandler = async (e) => {
        e.preventDefault();


        if (!uName || !uPassword) {
            return;
        }


        const { data } = await axios.post("https://fakestoreapi.com/auth/login", {
            "username": uName,
            "password": uPassword
        })
        // console.log(data);

        localStorage.setItem("user-token", data.token);
        setUserToken(data.token);

        props.onUserLogedIn();

        setUName('');
        setUPassword('');

        navigate('/home');

    }



    return (
        <div className={classes.login}>

            <div className={classes.pics}>
                <img src={vec2} />
                <img src={vec3} />
                <img src={vec4} />
                <img src={vec5} />
            </div>

            <div className={classes.form}>


                <div className='container'>

                    <div className='row d-felx align-items-center'>

                        <div className={` d-none d-lg-block col-lg-6 p-lg-0 p-5 mt-3 p-4 ${classes.image} `}>
                            <img src={group}  />
                        </div>

                        <div className='col-lg-6 text-center'>

                            <div className='pb-3 mt-5 mt-lg-0 d-flex align-items-center justify-content-center ' >
                                <div className='me-3'>
                                    <img src={logo1} />
                                </div>

                                <div>
                                    <img src={logo2} />
                                </div>
                            </div>

                            <div className={`pb-3 ${classes.welcome}`}>
                                <h3>Welcome back</h3>
                            </div>

                            <div className={`px-5 mx-5 mb-5 ${classes.paragraph}`}>
                                <p >A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.</p>
                            </div>

                            <div className={classes.inputs}>
                                <div className={classes['input-control']}>
                                    <label>Username</label>
                                    <input value={uName} onChange={userNameHandler} type='text' />
                                </div>

                                <div className={classes['input-control']}>
                                    <label>Password</label>
                                    <input value={uPassword} onChange={userPasswordHandler} type='text' />
                                </div>
                            </div>

                            <div className={classes.action}>
                                <button disable={btnDisabled} className={btnDisabled ? classes.btnDisabledStyled : ''} onClick={formSubmitHandler}>Login</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
};


export default Login;