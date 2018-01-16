import React, { Component } from 'react';
import '../styles/App.css'

export default class RecipeForm extends Component{

    state = {recipe: this.props.recipe};

    save = () => {
        this.props.handleSave(this.state.recipe);
    };

    addIngredient = () => {
      this.setState(prevState => ({
          ...prevState,
          ...prevState.recipe,
          ...prevState.ingredients,
          ingredients: prevState.recipe.ingredients.push('')
      }));
    };

    handleNameChange = (event) => {
        let newRecipe = this.state.recipe;

        newRecipe.name = event.target.value;

        this.setState({recipe: newRecipe});
    };

    handleIngredientChange = () => (event) => {
      let newRecipe = this.state.recipe;

      newRecipe.ingredients[event.target.name] = event.target.value;

      this.setState({recipe: newRecipe});
    };

    render(){
        if(this.state.recipe) {
            return (
                <div className='recipeForm'>
                    <div>
                        Recipe Name
                        <input name='title'
                               defaultValue={this.state.recipe.name}
                               onChange={this.handleNameChange}/>
                        <div>
                        Ingredients
                        {this.state.recipe.ingredients.map((ingredient, index) => {
                            return(
                                <li key={index}>
                                    <input className='ingredient'
                                           key={index}
                                           defaultValue={ingredient}
                                           name={index}
                                           onChange={this.handleIngredientChange(index)}/>
                                </li>
                            )
                        })}
                            <button onClick={this.addIngredient}>add ingredient</button>
                        </div>
                    </div>
                    <div>
                        <button onClick={this.save}>Save</button>
                    </div>
                </div>

            )
        }
        return(
            <div></div>
        )
    }
}