import React from 'react';

import classes from "./BagCard.module.scss";
import bag from "../../../images/Bag.png";


const BagCard = () => {
    return (
        <div className={classes['bag-icon']}>
            <img src={bag} />
        </div>
    )
}

export default BagCard;