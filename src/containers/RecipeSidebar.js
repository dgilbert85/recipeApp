import {connect} from 'react-redux';

import RecipeSidebar from '../components/RecipeSidebar';
import * as recipeActions from '../actions/Recipe';

const mapStateToProps = state => ({
   recipes: state.app.recipes,
   activeRecipe: state.app.activeRecipe,
});

const mapDispatchToProps = dispatch => ({
   setActiveRecipe: (recipe) => {dispatch(recipeActions.setActiveRecipe(recipe))}
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSidebar);