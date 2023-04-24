import React, { useState, useEffect } from 'react';
import classes from "./MainHeader.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getNavItem, getProductByCategory } from '../redux/action';
import Card from '../card/Card';

// === import Icons ===
import logo1 from "../../images/Group2.png";
import logo2 from "../../images/Vector1.png";
import group3 from "../../images/Group3.png";
import group4 from "../../images/Group4.png";
import vector7 from "../../images/Vector7.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import { Link } from 'react-router-dom';


const MainHaeder = (props) => {

  const dispatch = useDispatch();
  const { navItem } = useSelector((state) => state.navItem);

  const [activeHeader, setActiveHeader] = useState();
  const [activeHambergerMenu, setActiveHambergerMenu] = useState(false);

  useEffect(() => {
    dispatch(getNavItem());
  }, [])


  const getDataByCategoryHandler = (e, index) => {
    dispatch(getProductByCategory(e.target.innerText));
    setActiveHeader(index);
  }

  const hambergermenuHandler = () => {
    setActiveHambergerMenu(true);
  }

  const closeMenuHandler = () => {
    setActiveHambergerMenu(false);
  }


  return (
    <>
      {
        props.showHeader && (
          <div className={classes.navbar}>

            <div className='container py-3 py-lg-2 d-flex align-items-center px-5 px-lg-0 justify-content-between '>

              <div className='d-lg-flex align-items-center d-none '>

                <div>
                  <img src={logo1} />
                </div>

                <div className='ms-2 mt-2'>
                  <img src={logo2} />
                </div>
              </div>

              {/* === Responsive - Mobile === */}
              <div className='d-lg-none d-block'>
                {
                  activeHambergerMenu ? (<MdOutlineClose onClick={closeMenuHandler} className={` fs-2 text-white ${classes['hamberger-menu']}`} />) : (<GiHamburgerMenu onClick={hambergermenuHandler} className={` fs-2 text-white ${classes['hamberger-menu']}`} />)
                }
              </div>

              <ul className={` d-flex align-items-center mt-3 list-unstyled ${classes.category} ${activeHambergerMenu ? 'd-block' : 'd-none d-lg-flex'} `}>
                {
                  navItem.map((item, index) => (
                    <li onClick={(e) => getDataByCategoryHandler(e, index)} className={`mx-4 ${activeHeader === index ? classes.active : ""}`} key={index}>{item}</li>
                  ))
                }
              </ul>

              {/* === Responsive - Mobile === */}
              <div className="d-lg-none d-flex align-items-center">
                <div>
                  <img src={group4} />
                </div>

                <div className='ms-2 mt-2'>
                  <img src={vector7} />
                </div>
              </div>

              <div className={`d-flex align-items-center`}>

                <Link to="carditem">
                  <Card />
                </Link>

                <div className={`ms-3 d-none d-lg-block ${classes['add-product']}`}>
                  <span>
                    <img src={group3} />
                    <Link to="add-product">Add Product</Link>
                  </span>
                </div>

              </div>


            </div>

          </div>
        )
      }
    </>
  )
}

export default MainHaeder