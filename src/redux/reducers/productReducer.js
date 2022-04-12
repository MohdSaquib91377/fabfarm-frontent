import { ActionTypes } from "../contants/action-types"

const initialState = {
    products: [{
        id: 1,
        image: "images/thumb/pumpkin-seeds.jpg",
        title: "Pumpkin seeds",
        description: "Flare Seeds Seeds Rare Spinsh Seeds For Home Gardening 20 Exotic Seeds Pack Seed",
        Qty: {
            first_otp: "500gm",
            second_otp: "600gm"
        },
        quantity: 1,
        price: 300
    },
    {
        id: 2,
        image: "images/thumb/spinach-seeds.jpg",
        title: "Spinach Seeds / Palak Seeds",
        description: "Flare Seeds Seeds Rare Spinsh Seeds For Home Gardening 20 Exotic Seeds Pack Seed",
        Qty: {
            first_otp: "500gm",
            second_otp: "600gm"
        },
        quantity: 1,
        price: 300
    },
    {
        id: 3,
        image: "images/thumb/capsicum-green.jpg",
        title: "Capsicum Green Vegetable seeds",
        description: "Floriculture Greens Seeds Plants Garden Capsicum Green Organic Vegetable F1 Hybrid Seeds Pack Seed",
        Qty: {
            first_otp: "500gm",
            second_otp: "600gm"
        },
        quantity: 1,
        price: 300
    },
    {
        id: 4,
        image: "images/thumb/pumpkin-seeds.jpg",
        title: "Pumpkin seeds",
        description: "Flare Seeds Seeds Rare Spinsh Seeds For Home Gardening 20 Exotic Seeds Pack Seed",
        Qty: {
            first_otp: "500gm",
            second_otp: "600gm"
        },
        quantity: 1,
        price: 300
    },
    {
        id: 5,
        image: "images/thumb/spinach-seeds.jpg",
        title: "Spinach Seeds / Palak Seeds",
        description: "Flare Seeds Seeds Rare Spinsh Seeds For Home Gardening 20 Exotic Seeds Pack Seed",
        Qty: {
            first_otp: "500gm",
            second_otp: "600gm"
        },
        quantity: 1,
        price: 300
    },
    {
        id: 6,
        image: "images/thumb/capsicum-green.jpg",
        title: "Capsicum Green Vegetable seeds",
        description: "Floriculture Greens Seeds Plants Garden Capsicum Green Organic Vegetable F1 Hybrid Seeds Pack Seed",
        Qty: {
            first_otp: "500gm",
            second_otp: "600gm"
        },
        quantity: 1,
        price: 300
    },
    ],
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
        case ActionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart ? state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item + 1 } : item)
                    : [...state.cart, { ...item, quantity: 1 }]
            };
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ActionTypes.ADDJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    { ...item, quantity: action.payload.quantity }
                    : item)
            };
        default:
            return state;
    }
}
