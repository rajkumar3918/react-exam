import { configureStore } from "@reduxjs/toolkit";
import registerDetails from "./sclice/register";

const store = configureStore({
    reducer:{
        ResData: registerDetails.reducer,
    }
})

export default store;