import React, { useState, useEffect } from 'react';

import Products from '../products/Products';
import Slide from '../layout/slide/Slide';
import Popup from '../popup/Popup';
import BottomHeader from "../bottom-header/BottomHeader";

import { useDispatch, useSelector } from 'react-redux';
import { getShowHidePopup } from '../redux/action';

const Home = () => {

  const [modal, setModal] = useState(false);


  const hideModalHandler = () => {
    setModal(false);
  }

  const showModalHandler = () => {
    setModal(true);
  }

  return (
    <>
      {modal && <Popup onHideModal={hideModalHandler} />}
      <Slide />
      <Products onShowModal={showModalHandler} />
      <BottomHeader />
    </>
  )
}

export default Home;