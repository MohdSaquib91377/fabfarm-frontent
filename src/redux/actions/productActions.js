import { ActionTypes } from "../contants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const addToCart = (itemID) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        },
    };
};
export const removeFromCart = (itemID) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        },
    };
};
export const incrementQuantity = (itemID) => {
    return {
        type: ActionTypes.INCREMENT_QUANTITY,
        payload: {
            id: itemID,
        },
    };
};
export const decrementQuantity = (itemID) => {
    return {
        type: ActionTypes.DECREMENT_QUANTITY,
        payload: {
            id: itemID,
        },
    };
};
export const loadCurrentItem = (item) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
};

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    }
}

export const setSigninOpen = () => {
    return {
        type: ActionTypes.SET_SIGNIN_MODAL,
        payload: null,
    }
}
export const setSignupOpen = () => {
    return {
        type: ActionTypes.SET_SIGNUP_MODAL,
        payload: null,
    }
}