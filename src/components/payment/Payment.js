import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Payment.module.scss';
import PaymentPopup from './payment-popup/PaymentPopup';

const Payment = (props) => {

    const [paymentModal, setPaymentModal] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);


    const [userCardNumber, setUserCardNumber] = useState();
    const [userCvv2, setUserCvv2] = useState();
    const [userYear, setUserYear] = useState();
    const [userMonth, setUserMonth] = useState();
    const [userPass, setUserPass] = useState();

    const dispatch = useDispatch();
    const addProduct = useSelector((state) => state.addProduct);

    const totalAmount = addProduct.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
    // console.log(totalAmount)

    const cardNumberHandler = (e) => {
        setUserCardNumber(e.target.value);
    }

    const cvv2Handler = (e) => {
        setUserCvv2(e.target.value);
    }

    const yearHandler = (e) => {
        setUserYear(e.target.value);
    }

    const monthHandler = (e) => {
        setUserMonth(e.target.value);
    }

    const passHandler = (e) => {
        setUserPass(e.target.value);
    }

    useEffect(() => {

        if (!userCardNumber || !userCvv2 || !userYear || !userMonth || !userPass) {
            setDisabledBtn(true);
        } else {
            setDisabledBtn(false);
        }

    }, [userCardNumber, userCvv2, userYear, userMonth, userPass])


    // === Form Submit Handler ===
    const checkOutHandler = (e) => {
        e.preventDefault();

        if (!userCardNumber || !userCvv2 || !userYear || !userMonth || !userPass) {
            return;
        }

        const sendData = {
            userPass: userPass,
            userCardNumber: userCardNumber,
        }

        setPaymentModal(true);
    }

    const paymentModalHideHandler = () => {
        setPaymentModal(false);
    }

    return (
        <>
            {paymentModal && <PaymentPopup userCardNumber={userCardNumber} userPass={userPass} onHidePaymentModal={paymentModalHideHandler} />}
            <div className='container my-5'>

                <div className={` border rounded p-4 ${classes.head}`}>
                    <span className="fw-bold">Total Amount: </span>
                    <span className='ps-3'>${totalAmount}</span>
                </div>

                <div className={` ${classes.cart} `}>
                    <div className={` ${classes.title}`}>
                        <p>Payment</p>
                    </div>

                    <div className={classes['inputs-box']}>

                        <div className={classes['input-control']}>
                            <label>Card Number</label>
                            <input value={userCardNumber} onChange={cardNumberHandler} type='tel' className='text-center' placeholder='1234 - 5678 - 1111 - 1212' />
                        </div>

                        <div className={classes['input-control']}>
                            <label>CVV2</label>
                            <input value={userCvv2} onChange={cvv2Handler} type='number' />
                        </div>

                        <div className={` d-flex align-items-center ${classes['two-input']} `}>
                            <div>
                                <label>Year</label>
                                <input value={userYear} onChange={yearHandler} type='number' />
                            </div>
                            <div>
                                <label>Month</label>
                                <input value={userMonth} onChange={monthHandler} type='number' />
                            </div>
                        </div>

                        <div className={classes['input-control']}>
                            <label>E-Pass</label>
                            <input value={userPass} onChange={passHandler} type='number' />
                        </div>

                        <div className={` d-felx align-items-center ${classes.actions} `}>
                            <button className={classes.cancel}>Cancel</button>
                            <button disabled={disabledBtn} className={disabledBtn ? classes.disabledBtnStyle : classes.checkout} onClick={checkOutHandler}>Check Out</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Payment;