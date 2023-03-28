import {configureStore} from '@reduxjs/toolkit'
import {filterReducer} from "./Slices/filter/filterSlice";
import {cartreducer} from "./Slices/cart/cartSlice";
import {pizzaSlice} from "./Slices/pizza/pizzasSlice";
import {useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {
        cart: cartreducer,
        filter: filterReducer,
        pizza: pizzaSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
