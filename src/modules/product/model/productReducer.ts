import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductListType} from "./productType";
import {IProductInitialState} from "./productReducerType";
import {fetchProductList} from "../dataSource/productListData";

export const productListReducer = createSlice({
    name: "productList",
    initialState: {
        productList: [],
        searchList: [],
        message: null,
        status: null,
        hasNextPage: false,
        page: 1
    },
    reducers: {
        setProductList(state: IProductInitialState, action: PayloadAction<ProductListType>) {
            state.productList = action.payload;
        },
        searchProductList(state: IProductInitialState, action: PayloadAction<string>) {
            //should be happening in the API not good to modified 100 or more data on the client (performance wise)
            const filteredData = state.productList.filter((value) => value.name.includes(action.payload));
            if (action.payload === '') {
                state.searchList = [];
            } else {
                state.searchList = filteredData;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProductList.pending, (state: IProductInitialState, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProductList.fulfilled, (state: IProductInitialState, action) => {
                state.status = 'succeeded';
                state.message = null;
                // Add any fetched posts to the array
                if (action.payload?.page === 1) {
                    state.productList = action.payload?.data;
                    state.hasNextPage = true;
                } else if (action.payload?.hasNextPage) {
                    state.productList = state.productList.concat(action.payload?.data);
                    if (action.payload?.data.length !== 15) {
                        state.hasNextPage = false;
                    } else {
                        state.hasNextPage = true;
                    }
                } else {
                    state.hasNextPage = false;
                }

                state.page = action.payload.page;
            })
            .addCase(fetchProductList.rejected, (state: IProductInitialState, action) => {
                state.status = 'failed';
                state.message = action.payload as string || 'Internal error';
            })
    }
})


export const { searchProductList } = productListReducer.actions;
