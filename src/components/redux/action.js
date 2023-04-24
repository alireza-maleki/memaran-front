import axios from "axios";


// === Get Navigate Category Items ===
export const getNavItem = () => async (dispatch, getState) => {

    dispatch({ type: "loading" });

    try {

        const { data } = await axios.get('https://fakestoreapi.com/products/categories');
        dispatch({ type: 'navItem', payload: [...data] });
        // console.log(data);

    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}

// === Get All Data For Home Page ===
export const getAllData = () => async (dispatch, getState) => {

    dispatch({ type: "loading" });

    try {

        const { data } = await axios.get('https://fakestoreapi.com/products');
        dispatch({ type: 'allData', payload: [...data] });
        // console.log(data);

    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}


// === Get Products By Category ===
export const getProductByCategory = (category) => async (dispatch, getState) => {

    dispatch({ type: "loading" });

    try {

        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        dispatch({ type: 'product-by-category', payload: [...data] });
        // console.log(data);

    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}


// === Get Products By Sorting ===
export const getProductBySorting = (sort) => async (dispatch, getState) => {

    dispatch({ type: "loading" });

    try {

        const { data } = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
        dispatch({ type: 'product-by-sorting', payload: [...data] });
        // console.log(data);

    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}




// === Get One Product By ID ===
export const getProductById = (productId) => async (dispatch, getState) => {

    dispatch({ type: "loading" });

    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        dispatch({ type: 'detail', payload: data });
        // console.log(data);
    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}


// === Add To Card  ===
export const addToCard = (item, qty) => (dispatch, getState) => {
    dispatch({ type: "addToCard", payload: item, qty });
};



// === Product Quantity To Plus ===
export const plusQuantity = (item, qty) => (dispatch, getState) => {
    // const itemInCart = getState().addProduct;
    // const qty = productInCart.map((item) => item.qty);
    // const item = allProducts.find((product) => product.id === productId);
    dispatch({ type: "plusQty", payload: item });
};


// === Mines Product Quantity ===
export const minusQuantity = (item) => (dispatch, getState) => {
    dispatch({ type: "minus", payload: item });
};




