import React, { Component } from 'react';
import UUID from 'uuid-js';

import '../styles/App.css'


export default class RecipeSidebar extends Component{

    handleRecipeClick = (recipe) => {
        this.props.setActiveRecipe(recipe);
    };

    createNewRecipe = () => {
        let newRecipe = {
            id: UUID.create(),
            name: 'New Recipe',
            ingredients: []
        };
      this.props.addRecipe(newRecipe);
      this.props.setActiveRecipe(newRecipe);
    };

    renderRecipes = () => {
        return this.props.recipes.map((recipe, index) => {
          if (recipe) {
              return (
                  <div className='sideBarItem' key={index} onClick={() => this.handleRecipeClick(recipe)}>
                      {recipe.name}
                  </div>
              )
          }
      })
    };

    render(){
        return (
            <div className='sidebar'>
                <button onClick={this.createNewRecipe}> Add New Recipe</button>
                <div>
                    {this.renderRecipes()}
                </div>
            </div>
        )
    }

}