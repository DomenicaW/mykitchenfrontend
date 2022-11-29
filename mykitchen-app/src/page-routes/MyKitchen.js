import React, {Component} from 'react';
import { Link} from "react-router-dom";

import RecipeCard from "../components/RecipeCard.js";
import Recipes from "../page-routes/Recipes.js"

import '../css-sheets/index.css';

// let baseURL = "";
// baseURL = `${process.env.REACT_APP_BACKEND_URL}`
//
// if (process.env.NODE_ENV === "development") {
//     baseURL = "http://localhost:3000";
// } else {
//     baseURL =
// }
// console.log("current base url", baseURL);


class MyKitchen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        _id:"",
      };
    }
    getRecipes = () => {
      fetch(process.env.REACT_APP_BACKEND_URL)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            return [];
          }
        })
        .then(data => {
          console.log("data", data);
          this.setState({recipes: data.recipes});
        });
    };
    componentDidMount(){
      let showCard = {
        id: this.props.id,
        name: this.props.name,
        image:  this.props.image,
        description: this.props.description,
        duration: this.props.duration,
        used: this.props.used,
      }
      this.props.passRecipeData(showCard)
    }

    render() {
      return (
        <>
        <nav>
        <a href="/recipes/">Back to my Recipes</a>
        </nav>
        <h1 className="title">{this.state.showCard}</h1>
        {this.state.recipes.map(recipe => (
          <>
          <RecipeCard
          key={recipe._id}
          name={recipe.name}
          image={recipe.image}
          description={recipe.description}
          duration={recipe.description}
          used={recipe.used}
          ></RecipeCard>

          <button className="deleteButton" onClick={() => this.handleDelete(recipe._id)}> Delete {recipe.name}</button>
          <button className="editButton" onClick={() => this.handleChange(recipe._id)}> Edit Recipes {recipe.name}</button>
          </>
        ))}
        </>
      );
    }

}
export default MyKitchen;
