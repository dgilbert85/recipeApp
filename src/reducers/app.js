import {handleActions} from 'redux-actions';

import * as actions from '../actions/Recipe';

const initialState = {
    recipes: [
        {
            id: 123456,
            name: "POW POW CHICKEN",
            ingredients: [
                "1 bag frozen chicken",
                "Pow Pow Sauce"
            ]
    },
        {
            id: 12386894,
            name: "pew pew chicken",
            ingredients: [
                "1 bag frozen chicken",
                "Pew Pew Sauce"
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
    [actions.addRecipe]: (state, action) => ({...state, recipes: [...state.recipes, action.payload]})


}, initialState)