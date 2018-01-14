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

export default handleActions({
    [actions.setActiveRecipe]: (state, action) => ({...state, activeRecipe: action.payload}),
    [actions.deleteRecipe]: (state, action) => ({...state, recipes: removeRecipe(state, action.payload)}),

}, initialState)