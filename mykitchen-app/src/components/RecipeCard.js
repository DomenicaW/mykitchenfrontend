import React, {Component} from "react";

import "../css-sheets/index.css";
import "../css-sheets/RecipeCard.css"
import AddRecipe from "../page-routes/AddNew";
// import App from "../page-routes/Mykitchen/js";
import Recipes from "../page-routes/Recipes.js";



class RecipeCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        _id: "",
      };
    }




    render() {
      console.log("id", this.state._id);
      return (

        <>


        <div className= "redirectlinks">
        <a href="/recipes/new" className="new-recipe-button">New Recipe</a>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <a href="/recipes" className="my-kitchen"> Back to My Kitchen</a>
        </div>
        <br>
        </br>
        
        <div key = {this.props.id} className="RecipeSquare">
        <div className="ImageCard">
        <img src= {this.props.image} alt="Recipe Image" />
        </div>



        <h1 className="RecipeName"> {this.props.name}</h1>
        <h3 className="RecipeDescription">{this.props.description}</h3>

        </div>

        </>
      );
    }

}







export default RecipeCard;
