import {ProductListType} from "./productType";
import {PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";

//wrong setup API mock hasNextPage or similiar should be from API
export interface IProductInitialState {
    productList: ProductListType;
    searchList: ProductListType;
    message: string | null;
    status: string | null;
    hasNextPage: boolean;
    page: number;
}

export interface IProductReducers extends SliceCaseReducers<IProductInitialState> {
    setProductList: (state: IProductInitialState, action: PayloadAction<ProductListType>) => void;
}
