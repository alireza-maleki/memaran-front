import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from "./PaymentPopup.module.scss"

import successful from "../../../images/Vector6.png";

import { useNavigate } from "react-router-dom";

const PaymentPopup = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const addProduct = useSelector((state) => state.addProduct);

    const totalAmount = addProduct.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)


    const pageRouteHandler = () => {
        navigate('/home');
    }

    return (
        <>

            <div className={classes.backdrop} onClick={() => {
                props.onHidePaymentModal();
                pageRouteHandler()
            }} />
            <div className={classes.popup}>

                <div className={classes.header}>
                    <div className='d-flex flex-column align-items-center'>
                        <img className='pb-3' src={successful} />
                        <span className='ms-2'>your payment is successful</span>
                    </div>
                </div>

                <hr />

                <div className='container px-3 pt-3 px-lg-0 pt-lg-0 d-flex align-items-center justify-content-between justify-content-lg-around'>

                    <div className='fw-bold'>
                        <p>Total Amount: </p>
                        <p>Card Number:</p>
                        <p>Tracking Code:</p>
                    </div>

                    <div>
                        <p>${totalAmount}</p>
                        <p>{props.userCardNumber}</p>
                        <p>{props.userPass}</p>
                    </div>


                </div>

                <div onClick={pageRouteHandler} className={` d-lg-none d-flex align-items-center justify-content-center pt-5 ${classes['complete-btn']} `}>
                    <button>Complete  transaction</button>
                </div>

            </div>

        </>
    )
}

export default PaymentPopup;