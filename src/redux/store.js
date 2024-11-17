import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import shoppingListSlice from "./slices/shoppingListSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    shoppingList: shoppingListSlice,
  },
});

export default store;