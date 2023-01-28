import {ProductListType} from "./productType";
import {PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";

export interface IProductInitialState {
    productList: ProductListType;
    message: string | null;
    status: string | null;
}

export interface IProductReducers extends SliceCaseReducers<IProductInitialState> {
    setProductList: (state: IProductInitialState, action: PayloadAction<ProductListType>) => void;
}
