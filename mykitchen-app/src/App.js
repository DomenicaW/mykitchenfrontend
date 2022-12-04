import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink} from 'react-router-dom';
// import logo from './logo.svg';


import './App.css';
import "./css-sheets/index.css";
import "./css-sheets/RecipeCard.css";
import "./css-sheets/Edit.css";
import "./css-sheets/NewRecipe.css";

//Components
import Nav from "./components/Navigation.js";
import RecipeCard from "./components/RecipeCard.js";
// import EditRecipe from "./components/Edit.js";
import ShowItCard from "./components/ShowCard.js"; //thisss one to show?
// import EditButtn from "./components/Edit.js";
import Show from "./page-routes/Show.js";

import Recipes from "./page-routes/Recipes.js";
import AddRecipe from "./page-routes/AddNew.js";
import MyKitchen from "./page-routes/MyKitchen.js";
// import EditRecipe from "./page-routes/EditRecipes.js";
// import Show from "./page-routes/Show.js";
// import RecipeCard from "./components/RecipeCard.js";

// const App = () => {
//   return <h1>My Kitchen</h1>
//
// }

class App extends Component {
    constructor(props) {
      super(props);
      this.state={
        recipes: [{
          name:"",
          image: "",
          description: "",
          duration: "",
        }],
        showCard: {
          id:"",
          name:"",
          image: "",
          description: "",
          duration:"",
          used: "",
        },
      };
    }
    render(){
      console.log(this.state.recipes);

      return (
        <>
        <div className="myApp">
        <RecipeCard />

        <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes" element={<App />} />
        <Route path="/recipes/new" element={<AddRecipe />}/>
        // <Route path="/recipes/new" element={<MyKitchen />} />
        <Route path="/recipes/show/:id" element={<ShowItCard />} />
        <Route path="/recipes/edit/:id" element={<Show showCard={this.state.showCard}/>} />
        </Routes>
        </div>
        </>
      );
    }
}

export default App;
