import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails'
import '../styles/App.css'

export default class RecipeWindow extends Component{

    render(){
        if(this.props.activeRecipe){
            return (
                <RecipeDetails
                    recipe = {this.props.activeRecipe}
                    delete = {this.props.deleteRecipe}
                    setActiveRecipe = {this.props.setActiveRecipe}
                    save = {this.props.saveRecipe}
                />
            )
        } else {
            return null
        }
    }
}