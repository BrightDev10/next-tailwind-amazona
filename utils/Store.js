
import { createContext, useReducer} from 'react';

export const Store = createContext();

// Initialize store

const initialState = {
    cart: { cartItems: [ ] },
};

// Reducer function

function reducer( state, action) {
    switch (action.type) {
       case 'CART_ADD_ITEM': {
            const newItem = action.payload;
            const exisingtItem = state.cart.cartItems.find(
                (item) => item.slug === newItem.slug
            );
            const cartItems = exisingtItem 
              ? state.cart.cartItems.map((item) => 
                  item.name === exisingtItem.name ? newItem : item
                ) 
            :[...state.cart.cartItems, newItem];
            return {...state, cart: {...state.cart, cartItems} };
       }
       default:
        return state;
    }
}

// StoreProvider

export function StoreProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}


