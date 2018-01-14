import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import '../styles/App.css'


export default class RecipeSidebar extends Component{

    handleRecipeClick = (recipe) => {
        this.props.setActiveRecipe(recipe);
    };

    createNewRecipe = () => {
      this.props.setActiveRecipe(null);
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