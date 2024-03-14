import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from '../features/toggleMenu/toggleMenuSlice';
import searchReducer from '../features/toggleMenu/searchSlice';
import chatReducer from '../features/toggleMenu/chatSlice';

const store = configureStore({
    reducer: {
        toggleMenu: toggleMenuReducer,
        search: searchReducer,
        chat: chatReducer
    }
})

export default store;