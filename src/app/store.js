import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from '../features/toggleMenu/toggleMenuSlice';

const store = configureStore({
    reducer: {
        toggleMenu: toggleMenuReducer,
    }
})

export default store;