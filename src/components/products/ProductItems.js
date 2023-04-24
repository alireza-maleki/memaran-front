import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from "./ProductItems.module.scss";
import ProductDetail from './ProductDetail';
import { getAllData } from '../redux/action';

// === Swiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";


const ProductItems = (props) => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getAllData());
    }, [])

    // console.log(products)

    return (
        <>
            <div className={`container d-none d-lg-grid my-3 ${classes.cards}`}>
                {products.map((product) => (
                    <ProductDetail
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        show={props.showModal}
                    />
                ))}
            </div>


            <div className={` container ${classes['swiper-box']} `}>
                <Swiper 
                    className={` d-lg-none d-block ${classes.swiper} `}


                    dir={{
                        reverseDirection: true,
                    }}
                    

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        },
                        1400: {
                            slidesPerView: 4
                        },
                    }}

                >
                    {
                        products.map((product) => (
                            <SwiperSlide key={product.id} className={classes['swiper-slide']}>

                                <ProductDetail
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    description={product.description}
                                    show={props.showModal}
                                />


                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div >
        </>


    )
}

export default ProductItems