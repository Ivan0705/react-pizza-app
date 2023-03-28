import {createSlice} from "@reduxjs/toolkit";
import {EnStatus, IPizzasSliceState} from "./types";
import {fetchPizza} from "./asyncFetchPizza";

const initialState: IPizzasSliceState = {
    items: [],
    status: EnStatus.LOADING
};

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, (state) => {
                state.status = EnStatus.LOADING;
                state.items = [];
            })
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = EnStatus.SUCCESS;
                console.log(action);
            })
            .addCase(fetchPizza.rejected, (state) => {
                state.status = EnStatus.ERROR;
                state.items = [];
            })
    }
});

export const pizzaSlice = pizzasSlice.reducer;
