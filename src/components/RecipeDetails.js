import React, { Component } from 'react';
import '../styles/App.css'

export default class RecipeWindow extends Component{

    state = {editMode : false};

    componentWillReceiveProps(nextProps){
        this.setState({editMode: false});
    }

    renderIngredients(){
        const ingredients = this.props.recipe.ingredients.map((ingredient, index) => {
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

    handleSave = () => {
        this.setState({ editMode : !this.state.editMode})
    };

    handleDelete = () => {
      this.props.setActiveRecipe(null);
      this.props.delete(this.props.recipe.id)
    };

    render(){
        if(this.state.editMode){
            return(
                <div className='window'>
                    time to edit
                    <div>
                        <button onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            )
        } else {
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