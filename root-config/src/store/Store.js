import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/NavigationSlice";
import appReducer from "./slices/appSlice";
import themeReducer from "./slices/themeSlices";

export const store = configureStore({
  reducer: {
    app: appReducer,
    navigation: navigationReducer,
    theme: themeReducer,
  },
});