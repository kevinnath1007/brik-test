import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
// @ts-ignore
import createSensitiveStorage from "redux-persist-sensitive-storage";
import {productListReducer} from "../../modules/product/model/productReducer";

const sensitiveStorage = createSensitiveStorage({
    keychainService: "myKeychain",
    sharedPreferencesName: "mySharedPrefs"
});

//in case needed for another things beside token that don't need well encrypted
const mainPersistConfig = {
    key: "main",
    storage: AsyncStorage
};

//encryptedAsyncStorage mainly for token
const tokenPersistConfig = {
    key: "token",
    storage: sensitiveStorage
};

const rootReducer = combineReducers({
    product: productListReducer.reducer,
    // token: persistReducer(tokenPersistConfig, tokenReducer)
});

export const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
