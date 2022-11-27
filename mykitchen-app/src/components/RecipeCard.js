import React, {Component} from "react";

import "../css-sheets/index.css";
import "../css-sheets/RecipeCard.css"

// import App from "../page-routes/Mykitchen/js";


class RecipeCard extends Component {
    constructor(props) {
      super(props);
      this.state ={
        recipe: [],
        id: []
      };
    }




    render() {
      console.log("id", this.state._id);
      return (
        <div key = {this.props.id} className="RecipeSquare">
        <div className="ImageCard">
        <img src= {this.props.img} alt="Recipe Image" />
        </div>

        <button>New</button>

        <h3 className="RecipeName"> {this.props.name}</h3>
        </div>
      );
    }

}







export default RecipeCard;
