import React, { useEffect, useState } from 'react';

import classes from "./AddProduct.module.scss";

import axios from 'axios';
import AddProductPopup from './add-product-popup/AddProductPopup';

const AddProdcut = () => {

    const [addProductModal, setAddProductModal] = useState(false);
    const [productDetail, setProductDetail] = useState();
    const [disabledBtn, setDisabledBtn] = useState(false);

    const [userTitle, setUserTitle] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userCategory, setUserCategory] = useState('');
    const [userImage, setUserImage] = useState('');
    const [userPrice, setUserPrice] = useState();


    const titleHandler = (e) => {
        setUserTitle(e.target.value);
    }

    const descriptionHandler = (e) => {
        setUserDescription(e.target.value);
    }

    const CategoryHandler = (e) => {
        setUserCategory(e.target.value);
    }

    const ImageHandler = (e) => {
        setUserImage(e.target.value);
    }

    const PriceHandler = (e) => {
        setUserPrice(e.target.value);
    }

    useEffect(() => {

        if (!userTitle || !userDescription || !userCategory || !userImage || !userPrice) {
            setDisabledBtn(true);
        } else {
            setDisabledBtn(false);
        }

    }, [userTitle, userDescription, userCategory, userImage, userPrice]);


    // === Form Submit Handler ===
    const checkOutHandler = async (e) => {
        e.preventDefault();

        if (!userTitle || !userDescription || !userCategory || !userImage || !userPrice) {
            setDisabledBtn(true);
            return;
        }

        const { data } = await axios.post("https://fakestoreapi.com/products", {
            "title": userTitle,
            "price": userPrice,
            "description": userDescription,
            "image": userImage,
            "category": userCategory
        });
        setProductDetail(data);

        setUserTitle('');
        setUserDescription('');
        setUserCategory('');
        setUserImage('');
        setUserPrice('');

        setAddProductModal(true);
    }

    const paymentModalHideHandler = () => {
        setAddProductModal(false);
    }


    return (
        <>
            {addProductModal && <AddProductPopup data={productDetail} onHideAddProductPopup={paymentModalHideHandler} />}
            <div className='container my-5'>

                <div className={` ${classes.head}`}>
                    <p>A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.</p>
                </div>

                <div className={classes.cart}>
                    <div className={` ${classes.title}`}>
                        <p>Add Product</p>
                    </div>

                    <div className={classes['inputs-box']}>

                        <div className={classes['input-control']}>
                            <label>Title</label>
                            <input value={userTitle} onChange={titleHandler} type='text' />
                        </div>

                        <div className={classes['input-control']}>
                            <label>Description</label>
                            <textarea value={userDescription} onChange={descriptionHandler} type='text' />
                        </div>

                        <div className={classes['input-control']}>
                            <label>Category</label>
                            <input value={userCategory} onChange={CategoryHandler} type='text' />
                        </div>

                        <div className={classes['input-control']}>
                            <label>Image URL</label>
                            <input value={userImage} onChange={ImageHandler} type='text' />
                        </div>

                        <div className={classes['input-control']}>
                            <label>Price</label>
                            <input value={userPrice} onChange={PriceHandler} type='text' />
                        </div>

                        <div className={` d-felx align-items-center ${classes.actions} `}>
                            <button className={classes.cancel}>Cancel</button>
                            <button disabled={disabledBtn} className={disabledBtn ? classes.disabledBtnStyle : classes.checkout} onClick={checkOutHandler}>Add Product</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AddProdcut