import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
    name: "toggleMenu",
    initialState: {
        sideBarToggle:true
    },
    reducers: {
        toggleMenuSideBar: (state) => {
            state.sideBarToggle = !state.sideBarToggle
        },
        closeSideBar: (state) => {
            state.sideBarToggle = false
        }
    }
})

export const {toggleMenuSideBar,closeSideBar} = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;