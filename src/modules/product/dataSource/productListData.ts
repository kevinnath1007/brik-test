import {createAsyncThunk} from "@reduxjs/toolkit";
import Core from "../../../libraries/network/instance/core/core";
import {PRODUCT_LIST_ENDPOINT} from "../../../libraries/env/config";
import {ResponseCoreAPI} from "../../../utils/globalType";
import {ProductListType} from "../model/productType";

export const fetchProductList = createAsyncThunk(
    'get/ProductList',
    async ({page}: {page: number}): Promise<{
        page: number;
        nextPage: number;
        data: ProductListType;
        message: string | null;
    }> => {
    const response = await Core.get<{}, ResponseCoreAPI<ProductListType, null>>(PRODUCT_LIST_ENDPOINT, {
        params: {
            page,
            limit: 15
        }
    });

    if (response.ok) {
        return {
            page: page,
            nextPage: page + 1,
            data: response.data || [],
            message: null,
        };
    } else {
        throw Error(response.message || 'Network Error');
    }
})
