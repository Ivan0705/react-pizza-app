import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IPizza} from "./types";

type FetchParams = Record<string, number>;

export const fetchPizza = createAsyncThunk(
    'pizzas/fetchPizzaStatus',
    async (params: FetchParams) => {
        const {sortBy, order, category, search, currentPage} = params;

        const response = await axios.get<IPizza[]>(`https://64107ce7c3639725adb74dd1.mockapi.io/items?page=
        ${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);

        return response.data;
    },
);
