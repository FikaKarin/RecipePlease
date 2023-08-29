import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // import the uuid package

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: { ingredient: [] },
  reducers: {
    addIngredient: {
      reducer: (state, action) => {
        state.ingredient.push(action.payload);
      },
      // modify the addIngredient action creator
      prepare: (name) => {
        return { payload: { id: uuidv4(), name: name } };
      },
    },
    removeIngredient: (state, action) => {
      const id = action.payload;
      state.ingredient = state.ingredient.filter((ing) => ing.id !== id);
    },
  },
});

export const { addIngredient, removeIngredient } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
