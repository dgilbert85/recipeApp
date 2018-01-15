import React, { Component } from 'react';
import '../styles/App.css'
import RecipeForm from "./RecipeForm";

export default class RecipeWindow extends Component{

    state = {editMode : false};

    componentWillReceiveProps(){
        this.setState({editMode: false});
    }

    renderIngredients(){
        const ingredients = this.props.recipe.ingredients.map((ingredient, index) => {
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
        this.props.save(recipe);
        this.setState({ editMode : !this.state.editMode})
    };

    handleDelete = () => {
      this.props.setActiveRecipe(null);
      this.props.delete(this.props.recipe.id)
    };

    render(){
        if(this.state.editMode || this.props.recipe.ingredients.length === 0){
            return(
                <div className='window'>
                    <RecipeForm
                        recipe = {this.props.recipe}
                        handleSave = {this.handleSave}
                    />
                </div>
            )
        } else {
            console.log(this.props.recipe.ingredients.length);
            return (
                <div className='window'>
                    <div>
                        <div className='recipeTitle'>
                            {this.props.recipe.name}
                            <button onClick={this.handleEdit} className='editButton'>Edit</button>
                            <button onClick={this.handleDelete} className='deleteButton'>Delete</button>
                        </div>
                        <div className='ingredientHeader'>Ingredients:</div>
                        {this.renderIngredients()}
                    </div>
                </div>
            )
        }
    }
}