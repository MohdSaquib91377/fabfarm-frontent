import { ActionTypes } from "../contants/action-types"

const initialState = {
    products: [],
    cart: [],
    // currentItem: null,
    user: [],
    signinOpen: true,
    signupOpen: false,
    isAuthorized: false,
}
export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload }
        case ActionTypes.ADD_TO_CART:
            // const item = state.currentItem !== null ? state.currentItem : state.products.find((prod) => prod.id === action.payload.id);
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart ? state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 } : item)
                    : [...state.cart, { ...item, quantity: item.quantity }]
            };
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ActionTypes.INCREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    { ...item, quantity: item.quantity + 1 }
                    : item)
            };
        case ActionTypes.DECREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
                    : item)
            };
        case ActionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case ActionTypes.SET_SIGNIN_MODAL:
            return {
                ...state,
                signinOpen: !state.signinOpen
            };
        case ActionTypes.SET_SIGNUP_MODAL:
            return {
                ...state,
                signupOpen: !state.signupOpen
            }
        case ActionTypes.SET_IS_AUTHORIZED:
            return {
                ...state,
                isAuthorized: !state.isAuthorized
            }
        default:
            return state;
    }
}
