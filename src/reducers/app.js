import {handleActions} from 'redux-actions';
import UUID from 'uuid-js';

import * as actions from '../actions/Recipe';

const initialState = {
    recipes: [
        {
            id: new UUID(),
            name: "Spicy Chicken",
            ingredients: [
                "1 bag frozen chicken",
                "Spicy Sauce"
            ]
    },
        {
            id: new UUID(),
            name: "Sweet and Sour chicken",
            ingredients: [
                "1 bag frozen chicken",
                "Sweet and Sour Sauce"
            ]
        }],
    activeRecipe: null,
};

function removeRecipe(recipes, recipeId){
    let newRecipes = [];
    for(let recipe of recipes.recipes){
        if(recipe.id !== recipeId){
            newRecipes.push(recipe)
        }
    }
    return newRecipes
}

function saveRecipe(recipes, recipeToSave){
    let newRecipes = [];
    for(let recipe of recipes.recipes){
        if(recipe.id === recipeToSave.id){
            newRecipes.push(recipeToSave);
        } else {
            newRecipes.push(recipe);
        }
    }

    return newRecipes
}

export default handleActions({
    [actions.setActiveRecipe]: (state, action) => ({...state, activeRecipe: action.payload}),
    [actions.deleteRecipe]: (state, action) => ({...state, recipes: removeRecipe(state, action.payload)}),
    [actions.saveRecipe]: (state, action) => ({...state, recipes: saveRecipe(state, action.payload)}),
    [actions.addRecipe]: (state, action) => ({...state, recipes: [...state.recipes, action.payload]}),

}, initialState)