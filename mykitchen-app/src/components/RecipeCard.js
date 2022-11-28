import React, {Component} from "react";

import "../css-sheets/index.css";
import "../css-sheets/RecipeCard.css"

// import App from "../page-routes/Mykitchen/js";
import Recipes from "../page-routes/Recipes.js";

class RecipeCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        id: []
      };
    }




    render() {
      console.log("id", this.state._id);
      return (
        <div key = {this.props.id} className="RecipeSquare">
        <div className="ImageCard">
        <img src= {this.props.image} alt="Recipe Image" />
        </div>



        <h3 className="RecipeName"> {this.props.name}</h3>
        // <button className="newButton">New Recipe</button>
        <a href="/recipes/new">New Recipe</a>
        </div>
      );
    }

}







export default RecipeCard;
