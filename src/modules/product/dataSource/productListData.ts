import {createAsyncThunk} from "@reduxjs/toolkit";
import Core from "../../../libraries/network/instance/core/core";
import {API_CORE, PRODUCT_LIST_ENDPOINT} from "../../../libraries/env/config";
import {ResponseCoreAPI} from "../../../utils/globalType";
import {ProductListType, ProductType} from "../model/productType";

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

export const addProductList = createAsyncThunk(
    'posts/ProductList',
    async ({item, callback}: {item: Omit<ProductType, '_id' | 'CategoryId' | 'id'>, callback: () => void}): Promise<{
        postSuccess: boolean;
        data: ProductType | null;
    }> => {
        try {
            //Image hardcoded this moment because Bucket or storage API haven't set up yet
            const response = await Core.post<{}, ResponseCoreAPI<ProductType , null>>(
                PRODUCT_LIST_ENDPOINT,
                {
                    ...item,
                });

            if (response.ok) {
                if (callback) callback();
                return {
                    postSuccess: true,
                    data: response.data || null
                }
            }
            return {
                postSuccess: false,
                data: null
            }
        } catch (e) {
            throw Error('Network Error' + e);
        }
    }
)
