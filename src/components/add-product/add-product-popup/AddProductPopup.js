import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from "./AddProductPopup.module.scss"

import { addToCard } from "../../redux/action";

import successful from "../../../images/Vector6.png";
import star from "../../../images/star-1.png";


const AddProductPopup = (props) => {

    const { id, title, category, description, image, price } = props.data;

    // console.log(props.data);


    return (
        <>

            <div className={classes.backdrop} onClick={props.onHideAddProductPopup} />
            <div className={classes.popup}>

                <div className={classes.header}>
                    <div className='d-flex flex-column align-items-center'>
                        <img className='pb-3' src={successful} />
                        <span className='ms-2'>
                            Your product has been successfully registered
                        </span>
                    </div>
                </div>

                <hr />

                <div className='container p-3 d-md-flex d-block flex-wrap justify-content-around'>


                    <div className='col-lg-5'>
                        <img className='img-fluid rounded' src={image} />
                    </div>

                    <div className='ps-3 col-lg-7'>

                        <div>
                            <p className='fw-bold fs-5'>{title}</p>
                        </div>

                        <div>
                            <p className='text-muted'>{description}</p>
                        </div>

                        <div>
                            <span className='fw-bold'>Category:</span>
                            <span className='ps-2'> {category}</span>
                        </div>


                    </div>

                    <div className='ps-3 ps-lg-5  fw-bold fs-5 py-3 mt-4'>
                        <span>Price: </span>
                        <span>${price}</span>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AddProductPopup;