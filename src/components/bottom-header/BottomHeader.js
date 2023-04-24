import react, { useState } from 'react';

import classes from "./BottomHeader.module.scss";

// === Import Icons ===
import homepage from "../../images/Home.png";
import profile from "../../images/Profile.png";
import vector8 from "../../images/Vector8.png";

import { Link } from 'react-router-dom';

const BottomHeader = (props) => {

    return (
        <>
            {
                props.showHeader && (
                    <div className={`d-lg-none d-flex align-items-center justify-content-around ${classes['bottom-header']}`}>

                        <div className={` d-flex flex-column align-items-center pt-3 `}>
                            <Link to="/home">
                                <img className='img-fluid' src={homepage} />
                            </Link>
                            <p className={classes.home}>Home</p>
                        </div>

                        <div className={classes.plus}>
                            <Link to="/add-product">
                                <img className='img-fluid' src={vector8} />
                            </Link>
                        </div>

                        <div className='d-flex flex-column align-items-center pt-3'>
                            <img className='img-fluid' src={profile} />
                            <p>Profile</p>
                        </div>

                    </div>
                )
            }
        </>
    )

}

export default BottomHeader;