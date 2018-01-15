import { createAction } from 'redux-actions';

export const setActiveRecipe = createAction('RECIPES/SET_ACTIVE_RECIPE');
export const deleteRecipe = createAction('RECIPES/DELETE_RECIPE');
export const saveRecipe = createAction('RECIPES/SAVE_RECIPE');
export const addRecipe = createAction('RECIPE/ADD_RECIPE');