import { ActionTypes } from "../contants/action-types"

const initialState = {
    products: [],
    cart: [],
}
// export const productReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return state;
//         default:
//             return state;
//     }
// }

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload }
        case ActionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart ? state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 } : item)
                    : [...state.cart, { ...item, quantity: 1 }]
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
        default:
            return state;
    }
}
