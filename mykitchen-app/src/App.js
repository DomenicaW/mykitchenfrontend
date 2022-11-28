import React, {Component} from 'react';
import {Route, Routes, Outlet, Link, NavLink} from 'react-router-dom';
// import logo from './logo.svg';


import './App.css';
import "./css-sheets/index.css";
import "./css-sheets/RecipeCard.css";

//Components
import Nav from "./components/Navigation.js";
import RecipeCard from "./components/RecipeCard.js";




import Recipes from "./page-routes/Recipes.js";
import AddRecipe from "./page-routes/AddNew.js";

// import RecipeCard from "./components/RecipeCard.js";

// const App = () => {
//   return <h1>My Kitchen</h1>
//
// }

class App extends Component {
    constructor(props) {
      super(props);
      this.state={
        recipes: [],
      };
    }
    render(){
      console.log(this.state.recipes);

      return (
        <>
        <RecipeCard />

        <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes" element={<App />} />
        <Route path="/recipes/new" element={<AddRecipe />} />

        </Routes>
        </>
      );
    }
}

export default App;
