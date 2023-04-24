import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Popup.module.scss';

import { addToCard } from "../redux/action";


// === import icons ===
import star from "../../images/star-1.png";
import bag from "../../images/Bag.png";

const Popup = (props) => {

    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.detail);

    return (
        <>

            <div className={classes.backdrop} onClick={props.onHideModal} />
            <div className={classes.popup}>

                <div className={classes.header}>
                    <span>product detail</span>
                    <div className='d-flex align-items-center'>
                        <img src={star} />
                        <span className='ms-lg-2 ms-0'>0</span>
                    </div>
                </div>

                <div className='container'>
                    <div className='row mt-5 d-flex align-items-center'>

                        <div className={` col-lg-6 ${classes['product-img']} `}>
                            <img className='img-fluid ms-0 ms-lg-5' width={200} src={detail.image} />
                        </div>

                        <div className={`col-lg-6 ${classes.text}`}>
                            <h3 className={classes.title}>{detail.title}</h3>
                            <p className='mt-4'>A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.</p>
                            <p>A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.</p>

                            <div className='d-flex align-items-center justify-content-between  w-lg-75 w-100 px-3 px-lg-0 pt-lg-3'>
                                <span>${detail.price}</span>

                                <div onClick={() => {
                                    dispatch(addToCard({ ...detail, qty: 1 }));
                                    props.onHideModal();
                                }}
                                    className={` me-lg-5 me- ${classes['add-product']} }`} >
                                    <a className='d-flex align-items-center'>
                                        <img src={bag} />
                                        Add to card
                                    </a>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </div >

        </>
    )
}

export default Popup