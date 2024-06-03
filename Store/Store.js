import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice/cartSlice";

export const store=configureStore({
    reducer:{
        cart:cartSlice
    },
    devTools :true
})