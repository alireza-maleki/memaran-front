import React, { useEffect, useState } from 'react';

import classes from "./CardItem.module.scss";

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { minusQuantity, plusQuantity } from "../redux/action";

const CardItem = () => {

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);

    const dispatch = useDispatch();
    const addProduct = useSelector((state) => state.addProduct);

    // console.log(addProduct);

    const totalAmount = addProduct.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
    // console.log(totalAmount)

    const cashHandler = () => {
        setActiveBtn(false);
    }

    const loanHandler = () => {
        setActiveBtn(true);
    }

    return (
        <>
            {addProduct.length > 0 ? (
                <div className={` container px-5 mt-5 ${classes['card-container']} `}>
                    <p className='pb-3 ms-3 ms-lg-0'>Shopping Cart</p>
                    <div className=''>

                        {addProduct.map((item) => (
                            <>
                                <div className={` col-lg-8 d-none d-lg-block ${classes['carditem']}`} key={item.id}>
                                    <div className={`p-3 d-flex align-items-center justify-content-around ${classes.header}`}>
                                        <span>Product detail</span>
                                        <span>Name</span>
                                        <span>Price</span>
                                        <span>Total</span>
                                    </div>

                                    <div className='p-3 d-flex align-items-center justify-content-around'>

                                        <div>
                                            <img className={`img-fluid ${classes.image}`} src={item.image} />
                                        </div>

                                        <div className='text-start w-25'>
                                            <p>{item.title}</p>
                                        </div>

                                        <div className=''>
                                            <p>${item.price}</p>
                                        </div>

                                        <div>
                                            {(item.price * item.qty).toFixed(2)}
                                        </div>

                                    </div>

                                    <div className='ms-3'>
                                        <div className={`d-flex align-items-center justify-content-center w-25 ${classes.actions}`}>
                                            <button disabled={item.qty <= 1} className={item.qty <= 1 ? classes['disabled-btn'] : ''} onClick={() => dispatch(minusQuantity(item))}>-</button>
                                            <p>{item.qty}</p>
                                            <button onClick={() => dispatch(plusQuantity({ ...item, qty: 1 }))}>+</button>
                                        </div>
                                    </div>

                                </div>



                                <div className='container d-lg-none pb-4 my-3' key={item.id}>

                                    <div className={` p-2  ${classes.headers} `}>
                                        <p className='fw-bold'>Product detail</p>
                                    </div>

                                    <div className={classes['carditem-responsive']}>

                                        <div className={` d-flex aign-items-center justify-content-between border-bottom py-3 py-lg-0 `}>
                                            <div>
                                                <img width={120} src={item.image} />
                                            </div>

                                            <div className='ms-lg-3 mt-5 mt-lg-0'>
                                                <div className={`d-flex align-items-center justify-content-center w-lg-25  ${classes.actions}`}>
                                                    <button disabled={item.qty <= 1} className={item.qty <= 1 ? classes['disabled-btn'] : ''} onClick={() => dispatch(minusQuantity(item))}>-</button>
                                                    <p>{item.qty}</p>
                                                    <button onClick={() => dispatch(plusQuantity({ ...item, qty: 1 }))}>+</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className={` d-flex align-items-center justify-content-between pt-3 border-bottom ${classes.detail} `}>
                                            <p className='fw-bold'>Name</p>
                                            <div className='w-75'>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>

                                        <div className={` d-flex align-items-center justify-content-between pt-3 border-bottom ${classes.detail} `}>
                                            <p className='fw-bold'>Price</p>
                                            <div className='w-75'>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>

                                        <div className={` d-flex align-items-center justify-content-between pt-3 ${classes.detail} `}>
                                            <p className='fw-bold'>Total</p>
                                            <div className='w-75'>
                                                <p>${(item.price * item.qty).toFixed(2)}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>





                            </>

                        ))}

                        <div className={` col-lg-4  ${classes['total-amount']} `}>

                            <div className={` d-flex align-items-center justify-content-between ${classes['cash-loan']} `}>
                                <p onClick={cashHandler} className={!activeBtn ? classes.active : ''}>Cash</p>
                                <p onClick={loanHandler} className={activeBtn ? classes.active : ''}>Loan</p>
                            </div>

                            {
                                !activeBtn && (
                                    <>
                                        <div className='pt-4 d-flex align-items-center justify-content-around'>
                                            <p className='fw-bold'>Total Amount:</p>
                                            <p>${totalAmount}</p>
                                        </div>

                                        <div className={`pt-5 d-flex align-items-center justify-content-center ${classes['check-out']}`}>
                                            <Link to="/payment">Proceed to Check Out</Link>
                                        </div>
                                    </>
                                )
                            }

                            {
                                activeBtn && (
                                    <>
                                        <div className={` d-flex align-items-center justify-content-center mt-3 ${classes['box-input']} `}>
                                            <input type="radio" />
                                            <span className='fw-bold px-2'>3 months</span> - <span className='text-muted px-2'>20% intersts</span>
                                        </div>

                                        <div className={` d-flex align-items-center justify-content-center mt-3 ${classes['box-input']} `}>
                                            <input type="radio" />
                                            <span className='fw-bold px-2'>6 months</span> - <span className='text-muted px-2'>10% intersts</span>
                                        </div>

                                        <div className={` d-flex align-items-center justify-content-center ps-2 mt-3 ${classes['box-input']} `}>
                                            <input type="radio" />
                                            <span className='fw-bold px-2'>12 months</span> - <span className='text-muted px-2'>05% intersts</span>
                                        </div>

                                        <div className={`pt-4 d-flex align-items-center justify-content-center ${classes['check-out']}`}>
                                            <Link to="/payment">Proceed to Check Out</Link>
                                        </div>
                                    </>
                                )
                            }




                        </div>

                    </div>
                </div>
            ) : (
                <div className='container mt-5 d-flex align-items-center justify-content-center w-100 h-100'>
                    <h1 className='text-danger'>Card is empty!</h1>
                </div>
            )}
        </>
    )
}

export default CardItem