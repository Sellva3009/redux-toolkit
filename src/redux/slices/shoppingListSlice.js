import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter((item, index) => index !== action.payload);
        },
    },
});

export const { addItem, removeItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;