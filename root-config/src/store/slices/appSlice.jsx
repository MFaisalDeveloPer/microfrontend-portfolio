import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "dashboard",
  darkMode: true,
  sidebarCollapsed: false,
  mobileMenuOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },

    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },

    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const {
  setCurrentPage,
  toggleSidebar,
  toggleDarkMode,
  toggleMobileMenu,
} = appSlice.actions;

export default appSlice.reducer;