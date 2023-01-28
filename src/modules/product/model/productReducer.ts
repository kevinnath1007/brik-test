import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductListType} from "./productType";
import {IProductInitialState} from "./productReducerType";
import {fetchProductList} from "../dataSource/productListData";

export const productListReducer = createSlice({
    name: "productList",
    initialState: {
        productList: [],
        message: null,
        status: null
    },
    reducers: {
        setProductList(state: IProductInitialState, action: PayloadAction<ProductListType>) {
            state.productList = action.payload;
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
                } else {
                    state.productList = state.productList.concat(action.payload?.data);
                }
            })
            .addCase(fetchProductList.rejected, (state: IProductInitialState, action) => {
                state.status = 'failed';
                state.message = action.payload as string || 'Internal error';
            })
    }
})
