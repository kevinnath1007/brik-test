import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductListType, ProductType} from "./productType";
import {IProductAddInitialState, IProductAddReducers, IProductInitialState} from "./productReducerType";
import {addProductList, fetchProductList} from "../dataSource/productListData";
import {act} from "react-test-renderer";

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

export const productAddReducer = createSlice<IProductAddInitialState, IProductAddReducers, 'productAdd'>({
    name: "productAdd",
    initialState: {
        postSuccess: false,
        data: {
            categoryName: '',
            sku: '',
            name: '',
            description: '',
            weight: 0,
            width: 0,
            length: 0,
            height: 0,
            image: 'https://media.discordapp.net/attachments/238648160086523904/1069175417715564584/image.png',
            price: 0
        },
        message: null,
        status: null,
    },
    reducers: {
        setProductAdd(state: IProductAddInitialState, action: PayloadAction<{field: keyof ProductType, value: string }>) {
            let modifiedData;
            if (action.payload.field === "categoryName" || action.payload.field === "name" || action.payload.field === "sku" || action.payload.field === "description" || action.payload.field === "image") {
                modifiedData = {
                    ...state.data,
                    [action.payload.field]: action.payload.value
                }
            } else {
                modifiedData = {
                    ...state.data,
                    [action.payload.field]: Number(action.payload.value)
                }
            }
            state.data = modifiedData as ProductType;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(addProductList.pending, (state: IProductAddInitialState, action) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(addProductList.fulfilled, (state: IProductAddInitialState, action) => {
                state.status = 'succeeded';
                state.message = null;
                // Add any fetched posts to the array
                if (action.payload.postSuccess) {
                    state.postSuccess = true;
                } else {
                    state.postSuccess = false;
                    state.message = 'failed to add data';
                }
            })
            .addCase(addProductList.rejected, (state: IProductAddInitialState, action) => {
                state.status = 'failed';
                state.message = action.payload as string || 'Internal error';
            })
    }
})

export const { setProductAdd } = productAddReducer.actions;
