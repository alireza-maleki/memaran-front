import React, { Fragment } from 'react';


import classes from "./Products.module.scss";
import Category from './category/Category';
import ProductItems from './ProductItems';

const Products = (props) => {

    return (
        <>
            <Category />
            <ProductItems showModal={props.onShowModal} />
        </>
    )
}

export default Products