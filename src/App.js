import React, { Component } from 'react';
import RecipeSidebar from './containers/RecipeSidebar'
import RecipeWindow from './containers/RecipeWindow'
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <div>
            <RecipeSidebar/>
            <RecipeWindow/>
        </div>
    );
  }
}

export default App;
