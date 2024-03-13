import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from '../features/toggleMenu/toggleMenuSlice';
import searchReducer from '../features/toggleMenu/searchSlice';;

const store = configureStore({
    reducer: {
        toggleMenu: toggleMenuReducer,
        search: searchReducer
    }
})

export default store;