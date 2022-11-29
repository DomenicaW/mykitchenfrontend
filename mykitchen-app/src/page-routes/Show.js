import React, {Component} from 'react';
import {Route, Routes, NavLink, Link, Outlet} from "react-router-dom";
import RecipeCard from "../components/RecipeCard.js";
import Recipes from "../page-routes/Recipes.js";



class Show extends Component {

  constructor(props) {
    super(props);
      this.state = {
        recipes: [],
        _id: "",
        name:"",

      };
    }

    getRecipes = () => {
      fetch(process.env.REACT_APP_BACKEND_URL + '/' + `${this.state._id}` )
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
      this.getRecipes()
    }
  // render() {
  //   console.log("id", this.state._id);
  //   return (
  //
  //     <>
  //     <div className= "redirectlinks">
  //     <a href="/recipes/new">New Recipes</a>
  //     <a href="/recipes/edit/">Edit MY Recipes</a>
  //     <a href="/recipes"> Back to My Kitchen</a>
  //     <h3 className="RecipeName"> {this.state.name}</h3>
  //     </div>
  //
  //     <div key = {this.props.id} className="RecipeSquare">
  //     <div className="ImageCard">
  //     <img src= {this.props.image} alt="Recipe Image" />
  //     <h3 className="RecipeName"> {this.state.name}</h3>
  //     </div>
  //
  //
  //
  //     <h3 className="RecipeName"> {this.state.name}</h3>
  //     // <h5 className="recipeDescription"> {this.props.description}</h5>
  //     // <h3 className="recipeDuration"> {this.props.duration}</h3>
  //     // <button className="newButton">New Recipe</button>
  //     // <a href="/recipes/new">New Recipes</a>
  //     // <a href="/recipes"> Back to My Kitchen</a>
  //     </div>
  //
  //     </>
  //   );
  // }
  render(){
    console.log(this.state.recipes);
    console.log("id", this.state._id);
    return (
      <>
      {this.state.name}
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



        </>
      ))}
      </>
    );
  }
}

export default Show;
