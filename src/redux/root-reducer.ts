import { combineReducers } from "redux";
import { cartSlice } from "./Cart/cart-slice";

export const rootReducer = combineReducers({
    cartReducer: cartSlice.reducer
})

export type RootReducer = ReturnType<typeof rootReducer>