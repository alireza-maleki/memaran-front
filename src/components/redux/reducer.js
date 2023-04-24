// === initial State ===
const initialState = {
    items: [],
    totalAmount: 0,
}


// === Get Navigate Category Items Reducers ===
export const getNavItemReducer = (state = { navItem: [], loading: false, error: '' }, action) => {

    switch (action.type) {
        case 'navItem':
            return { ...state, navItem: action.payload, loading: false, error: false }

        case 'loading':
            return { ...state, loading: true, error: false }

        case 'error':
            return { ...state, error: action.payload, loading: false }

        default:
            return state;
    }

}


// === Get All Data Reducers ===
export const getAllDataReducer = (state = { products: [], loading: false, error: '' }, action) => {

    switch (action.type) {
        case 'allData':
            return { ...state, products: action.payload, loading: false, error: false }

        case 'product-by-category':
            return { ...state, products: action.payload, loading: false, error: false }

        case 'product-by-sorting':
            return { ...state, products: action.payload, loading: false, error: false }

        case 'loading':
            return { ...state, loading: true, error: false }

        case 'error':
            return { ...state, error: action.payload, loading: false }

        default:
            return state;
    }

}


// === Get One Product By ID Reducers ===
export const getProductByIdReducer = (state = { detail: [] }, action) => {

    switch (action.type) {
        case 'detail':
            return { ...state, detail: action.payload }

        default:
            return state;
    }

}


// === Add Product To Card And Remote It ===
export const addToCardReducer = (state = [], action) => {
    switch (action.type) {
        case "addToCard":
            const product = state.find((item) => item.id === action.payload.id);
            const totalAmount = 0;
            let updatedTotalAmount = totalAmount + action.payload.price * action.payload.qty;

            console.log(product)
            console.log('Before', totalAmount);
            console.log(updatedTotalAmount);
            console.log('After', totalAmount);

            if (product) {
                product.qty += 1;
                const products = state.filter(
                    (item) => item.id !== action.payload.id
                );
                console.log(products);
                return [...products, product];
            }
            action.payload.qty = 1;

            console.log(state);
            return [...state, action.payload];

        case "plusQty":
            const findItemIndex = state.findIndex((item) => item.id === action.payload.id);
            const findItemInCart = state[findItemIndex];
            const updatedItem = {
                ...findItemInCart,
                qty: findItemInCart.qty + action.payload.qty
            }
            const updatedItems = [...state];
            updatedItems[findItemIndex] = updatedItem;

            // const incrementItemQty = findItemInCart.qty += 1;
            // state[findItemIndex] =  incrementItemQty;
            // const allProducts = state.filter((item) => item.id !== findItemInCart.id);            // console.log(updatedTotalAmount);

            return [...updatedItems];

        case "minus": 
            const findItemIndexMinus = state.findIndex((item) => item.id === action.payload.id);
            const findItemInCartMinus = state[findItemIndexMinus];
            const updatedItemMinus = {
                ...findItemInCartMinus,
                qty: action.payload.qty - 1
            }
            const updatedItemsMinus = [...state];
            updatedItemsMinus[findItemIndexMinus] = updatedItemMinus;

            return [...updatedItemsMinus];


        case "removeInCard":
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};

