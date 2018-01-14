import {connect} from 'react-redux';

import * as recipeActions from '../actions/Recipe';
import RecipeWindow from "../components/RecipeWindow";

const mapStateToProps = state => ({
    activeRecipe: state.app.activeRecipe,
    recipes: state.app.recipes,
});

const mapDispatchToProps = dispatch => ({
    deleteRecipe: (recipeId) => (dispatch(recipeActions.deleteRecipe(recipeId))),
    setActiveRecipe: (recipe) => (dispatch(recipeActions.setActiveRecipe(recipe)))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeWindow);