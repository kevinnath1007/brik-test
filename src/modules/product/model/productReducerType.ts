import {ProductListType, ProductType} from "./productType";
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
    searchProductList: (state: IProductInitialState, action: PayloadAction<string>) => void;
}

export interface IProductAddInitialState {
    postSuccess: boolean;
    message: string | null;
    status: string | null;
    data: ProductType | Omit<ProductType, '_id' | 'id' | 'CategoryId'> | null;
}

export interface IProductAddReducers extends SliceCaseReducers<IProductAddInitialState> {
    setProductAdd: (state: IProductAddInitialState, action: PayloadAction<{field: keyof ProductType, value: string }>) => void;
}
