import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData, getProductById, getSetShowModal } from "../redux/action";


import classes from "./ProductDetail.module.scss";

import BagCard from './bag-card/BagCard';

import star1 from "../../images/star-1.png";
import star2 from "../../images/star-2.png";
import star3 from "../../images/star-3.png";
import star4 from "../../images/star-4.png";
import star5 from "../../images/star-5.png";


const ProductDetail = (props) => {

    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.detail);

    const { id, image, title, price, description } = props;

    const productPopUpHandler = (productId) => {
        dispatch(getProductById(productId));

    };
    // console.log(detail);



    return (
        <div onClick={() => {
            productPopUpHandler(id);
            props.show(); 
        }}
            className={`card shadow m-3 ${classes['main-card']}`} >
            <img className={`card-img-top p-3 mb-0 mb-lg-4 ${classes['card-img']}`} src={image} alt={title} />

            <div className='d-flex px-3 align-items-center justify-content-between'>
                <button className={classes.action}>Clothes</button>
                <div className={classes.stars}>
                    <img src={star1} />
                    <img src={star2} />
                    <img src={star3} />
                    <img src={star4} />
                    <img src={star5} />
                </div>
            </div>

            <div className="card-body">
                <p className={` card-title ${classes.title} `}>{title}</p>
                <hr />
                <p className={`card-text ${classes.text}`}>
                    A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.
                </p>

                <div className='d-flex align-items-center justify-content-between'>
                    <span>${price}</span>
                    <BagCard />
                </div>

            </div>
        </div>
    )
}

export default ProductDetail