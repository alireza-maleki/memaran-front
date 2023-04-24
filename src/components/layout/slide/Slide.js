import React from 'react';

import classes from "./Slide.module.scss";
import header from "../../../images/Rectangle22.png";


const Slide = () => {
    return (
        <div className={classes.rectangel}>
            <img className='img-fluid' src={header} />
        </div>
    )
}

export default Slide