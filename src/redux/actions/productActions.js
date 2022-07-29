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
export const setUserInfo = (user) => {
    return {
        type: ActionTypes.SET_USER_INFO,
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
export const setIsAuthorized = () => {
    return {
        type: ActionTypes.SET_IS_AUTHORIZED,
        payload: null
    }
}

export const makeCartEmpty = (empty) => {
    return {
        type: ActionTypes.MAKE_CART_EMPTY,
        payload: empty
    }
}

export const setTotalCartCount = (total) => {
    return {
        type: ActionTypes.SET_TOTAL_CART_COUNT,
        payload: total
    }
}
export const buyNow = (itemID) => {
    return {
        type: ActionTypes.BUY_NOW,
        payload: {
            id: itemID
        },
    };
}

export const setCouponDetails = (coupon) => {
    return {
        type: ActionTypes.SET_COUPON_DETAILS,
        payload: coupon,
    }
}

export const setMainCategory = (boolean) => {
    return {
        type: ActionTypes.SET_MAIN_CATEGORY,
        payload: boolean
    }
}

export const setPopup = (boolean) => {
    return {
        type: ActionTypes.SET_POPUP,
        payload: boolean
    }
}

export const setPopupMessage = (string) => {
    return {
        type: ActionTypes.SET_POPUP_MESSAGE,
        payload: string
    }
}

export const updateCart = () => {
    return {
        type: ActionTypes.UPDATE_CART,
        payload: null,
    }
}

export const setOnlineCart = (cartItems) => {
    return {
        type: ActionTypes.SET_ONLINE_CART,
        payload: cartItems,
    };
};