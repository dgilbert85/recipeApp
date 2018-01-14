import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails'
import '../styles/App.css'
import RecipeForm from "./RecipeForm";

export default class RecipeWindow extends Component{

    render(){
        if(this.props.activeRecipe === null){
            return(
                   <RecipeForm/>
            )
        } else {
            return (
                <RecipeDetails
                    recipe = {this.props.activeRecipe}
                    delete = {this.props.deleteRecipe}
                    setActiveRecipe = {this.props.setActiveRecipe}
                />
            )
        }
    }
}