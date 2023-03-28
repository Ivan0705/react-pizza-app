import {createSlice} from '@reduxjs/toolkit';
import {IFilterSliceState, SortPropertyEnum} from "./types";

const initialState: IFilterSliceState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RATING_DESC
    }
};

export const counterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryId: (state, action: any) => {
            state.categoryId = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setPageCount: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
                state.sort = action.payload.sort;
            } else {
                state.currentPage = 1;
                state.categoryId = 0;
                state.sort = {
                    name: 'популярности',
                    sortProperty: SortPropertyEnum.RATING_DESC,
                };
            }
        }
    }
});

export const {setCategoryId, setSort, setPageCount, setFilters} = counterSlice.actions;

export const filterReducer = counterSlice.reducer;
