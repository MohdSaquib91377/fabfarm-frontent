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
export const ajustQuantity = (itemID, value) => {
    return {
        type: ActionTypes.ADDJUST_QUANTITY,
        payload: {
            id: itemID,
            quantity: value,
        },
    };
};