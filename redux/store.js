import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// persist our store
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

// reducers
const reducer = combineReducers({
    user: userSlice,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};


// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);


// creating the store
const store = configureStore({
    reducer: persistedReducer,
    // async operasyonlar için
    middleware: [thunk],
});

export default store;