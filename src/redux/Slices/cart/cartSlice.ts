import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";
import {calcTotalPrice} from "../../../utils/TotalPrice";
import {ICartSlice, InterfaceItem} from "./types";

const initialState: ICartSlice = {
    totalPrice: 0,
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<InterfaceItem>) => {

            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((el: any) => el.id !== action.payload);

            state.totalPrice = calcTotalPrice(state.items);
        },
        plusItem: (state, action: PayloadAction<InterfaceItem>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem: (state, action: PayloadAction<InterfaceItem>) => {

            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count--;
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    }
});

export const {addProduct, removeItem, clearItems, plusItem, minusItem} = cartSlice.actions;

export const cartreducer = cartSlice.reducer;
