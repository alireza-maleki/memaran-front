import React, { useState } from 'react';

import classes from "./Category.module.scss";
import sort from '../../../images/Sort_Ascending.png';
import complete from '../../../images/Complete-1.png';

import { useDispatch, useSelector } from 'react-redux';

import { getProductBySorting } from "../../redux/action";

import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const Category = () => {

    const dispatch = useDispatch();

    const [activeAsending, setActiveAsending] = useState(false);
    const [activeDescending, setActiveDescending] = useState(false);

    const asendingDataHandler = (text) => {
        dispatch(getProductBySorting(text));

        if (text === "asen") {
            setActiveAsending(true);
            setActiveDescending(false);
        } else {
            setActiveAsending(false);
            setActiveDescending(true);
        }

        // if (text === "desc") {
        //     setActiveDescending(true);
        // } else {
        //     setActiveDescending(false);
        // }

    }

    return (
        <div className={` container w-100 px-5 mt-5 pb-2 d-flex align-items-center border-bottom ${classes.contain} `}>

            <div className={classes['arrow-box']}>
                <img className='me-2' src={sort} />
                <span>sorting:</span>
            </div>

            <div onClick={() => asendingDataHandler('asen')} className={`mx-5 ${classes['arrow-box']}`}>
                <span className={activeAsending ? classes['up-arrow'] : ''}>asending</span>
                <BsArrowUpShort className={`ms-0 ms-lg-2 ${activeAsending ? classes['up-arrow'] : ''} `} />
            </div>

            <div onClick={() => asendingDataHandler('desc')} className={classes['arrow-box']}>
                <span className={activeDescending ? classes['down-arrow'] : ''}>decending</span>
                <BsArrowDownShort className={`ms-0 ms-lg-2 ${activeDescending ? classes['down-arrow'] : ''} `} />
            </div>

        </div>
    )
}

export default Category