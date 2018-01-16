import React, { Component } from 'react';
import RecipeForm from './RecipeForm'
import '../styles/App.css'

export default class RecipeWindow extends Component{

    state = {
        editMode: false,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            recipe: nextProps.activeRecipe,
            editMode: false
        })
    }

    renderIngredients(){
        const ingredients = this.state.recipe.ingredients.map((ingredient, index) => {
            console.log(ingredient);
            if(ingredient){
                return(
                    <li className='ingredient' key={index}>{ingredient}</li>
                )
            }
        });

        return(ingredients);
    }

    handleEdit = () => {
        this.setState({ editMode : !this.state.editMode})
    };

    handleSave = (recipe) => {
        this.props.saveRecipe(recipe);
        this.setState({ editMode : !this.state.editMode})
    };

    handleDelete = () => {
        this.props.setActiveRecipe(null);
        this.props.deleteRecipe(this.state.recipe.id)
    };

    render(){
        if(this.state.recipe){
            if(this.state.editMode || this.state.recipe.ingredients.length === 0){
                return(
                    <div className='window'>
                        <RecipeForm
                            recipe = {this.props.activeRecipe}
                            handleSave = {this.handleSave}
                        />
                    </div>
                )
            } else {
                return (
                    <div className='window'>
                        <div>
                            <div className='recipeTitle'>
                                {this.state.recipe.name}
                                <button onClick={this.handleEdit} className='editButton'>Edit</button>
                                <button onClick={this.handleDelete} className='deleteButton'>Delete</button>
                            </div>
                            <div className='ingredientHeader'>Ingredients:</div>
                            {this.renderIngredients()}
                        </div>
                    </div>
                )
            }
        } else {
            return(
                <div className='window'>Select A Recipe from the left or create a new one</div>
            )
        }
    }
}