
import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from './shoppingList';
import favoritesReducer from './favorites'


export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
    shoppingListIngredients: ingredientReducer,
  },
});
