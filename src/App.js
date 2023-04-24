import React, { useState, useEffect, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login/Login';
import Home from './components/home/Home';
import MainHaeder from './components/layout/MainHaeder';
import CardItem from './components/card/CardItem';
import Payment from './components/payment/Payment';
import PaymentPopup from './components/payment/payment-popup/PaymentPopup';
import AddProdcut from './components/add-product/AddProdcut';
import BottomHeader from './components/bottom-header/BottomHeader';

const App = (props) => {

  const [showHeader, setShowHeader] = useState(false);

  const userLogedInHandler = () => {
    setShowHeader(true);
  }

  useEffect(() => {
    const userToken = localStorage.getItem("user-token");
    if (userToken) {
      setShowHeader(true);
    }
  }, [])

  return (
    <BrowserRouter>
      <MainHaeder showHeader={showHeader} />
      <BottomHeader showHeader={showHeader} />
      <Routes>
        <Route path="/" element={<Login onUserLogedIn={userLogedInHandler} />} />
        <Route path="/home" element={<Home />} />
        <Route path='/carditem' element={<CardItem />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/payment' element={<PaymentPopup />} />
        <Route path='/add-product' element={<AddProdcut />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;