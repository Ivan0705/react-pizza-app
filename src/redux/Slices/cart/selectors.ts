import {RootState} from "../../store";

export const cartSelector = (state: RootState) => state.cart;

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const cartItemsByIDSelector = (id: number, state: RootState) => state.cart.items.find((obj: any) => obj.id === id);
