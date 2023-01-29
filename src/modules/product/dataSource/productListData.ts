import {createAsyncThunk} from "@reduxjs/toolkit";
import Core from "../../../libraries/network/instance/core/core";
import {API_CORE, PRODUCT_LIST_ENDPOINT} from "../../../libraries/env/config";
import {ResponseCoreAPI} from "../../../utils/globalType";
import {ProductListType} from "../model/productType";

export const fetchProductList = createAsyncThunk(
    'get/ProductList',
    async ({page}: {page: number}): Promise<{
        page: number;
        hasNextPage: boolean;
        data: ProductListType;
        message: string | null;
    }> => {
        try {
            console.log(PRODUCT_LIST_ENDPOINT, API_CORE);
            const response = await Core.get<{}, ResponseCoreAPI<ProductListType, null>>(PRODUCT_LIST_ENDPOINT, {
                params: {
                    page,
                    limit: 15
                }
            });

            if (response.ok) {
                if (response.data?.length === 0) {
                    return {
                        page: page,
                        hasNextPage: false,
                        data: response.data || [],
                        message: null,
                    };
                }
                return {
                    page: page,
                    hasNextPage: true,
                    data: response.data || [],
                    message: null,
                };
            } else {
                return {
                    page: page,
                    hasNextPage: false,
                    data: response.data || [],
                    message: response.message as string,
                };
            }
        } catch (e) {
            throw Error('Network Error' + e);
        }
    }
)

