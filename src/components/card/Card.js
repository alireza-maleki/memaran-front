import React from 'react';

import classes from "./Card.module.scss";
import bag from "../../images/Bag.png";

import { useSelector } from 'react-redux';


const Card = () => {

    const addProduct = useSelector((state) => state.addProduct)

    return (
        <div className={classes['bag-icon']}>
            <img src={bag} />

            {
                addProduct.length > 0 ?  (<span>{addProduct.length}</span>) : (<span>0</span>)
            }

        </div>
    )
}

export default Card;