import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
    name: "toggleMenu",
    initialState: {
        sideBarToggle:true
    },
    reducers: {
        toggleMenuSideBar: (state) => {
            state.sideBarToggle = !state.sideBarToggle
        }
    }
})

export const {toggleMenuSideBar} = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;