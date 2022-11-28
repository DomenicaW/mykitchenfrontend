import React, {Component} from "react";
import {Route, Routes, NavLink, Link, Outlet} from "react-router-dom";

import RecipeCard from "../components/RecipeCard.js";
import AddRecipe from "../page-routes/AddNew.js";

//styling import goes here:
// import ".."

// import RecipeCard from "../components/RecipeCard.js";

let baseURL = "";

if (process.env.NODE_ENV ==="development") {
    baseURL = "http://localhost:3000/";
} else {
  baseURL = "http://localhost:3000/recipes";

}
console.log("current baseURL", baseURL);


class Recipes extends Component {

    constructor(props) {
      super(props);
        this.state = {
          recipes: [],
        };
      }

//-----------------------------------
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
//-----------------------------------

        componentDidMount() {
          this.getRecipes();
        }
//----------------
        handleAddRecipe = (recipe) => {
          const copyRecipes = [...this.state.recipes];
          copyRecipes.unshift(recipe);
          this.setState({
            recipes: copyRecipes,
            id: "",
            name: "",
          image: "",
          description: "",
          duration: "",
        });

      };
//-----------------
      handleDelete = (id) => {
        console.log("delete button responds", id);
        fetch(`${process.env.REACT_APP_BACKEND_URL}` + '/' + id , {
          method: "DELETE",
        })
        .then(window.location.href="/recipes")
        .then(response => {
          const findIndex = this.state.recipes.findIndex(recipe => recipe._id === id);
          const copyRecipes = [...this.state.recipes];
          copyRecipes.splice(findIndex, 1);
          this.setState({ recipes: copyRecipes});
        });
      };
//------------------

      render(){
        console.log(this.state.recipes);
        return (
          <>
          {this.state.recipes.map(recipe => (
            <>
            <RecipeCard
            key={recipe._id}
            name={recipe.name}
            image={recipe.image}
            description={recipe.description}
            duration={recipe.description}
            ></RecipeCard>
            <button className="deleteButton" onClick={() => this.handleDelete(recipe._id)}> Delete {recipe.name}</button>
            </>
          ))}
          </>
        );
      }



    }
    // render() {
    //
    //   return (
    //     <>
    //     <h2 style= {{ margintop: "2px"}}> Recipes</h2>
    //     <main>
    //     <div className="RecipeList">
    //     <Link to="/recipe/1">Receipe 1</Link>
    //     <br />
    //     <RecipeCard
    //       name="Birria Tacos"
    //       image="https://commons.wikimedia.org/wiki/File:Birria_tacos.jpg#/media/File:Birria_tacos.jpg"
    //       description="Birria Tacos (or Quesatacos) are made with tender beef, a rich adobo sauce, gooey cheese, and earthy corn tortillas!"
    //       duration= "3 hours"
    //       />
    //       </div>
    //       </main>
    //       </>



export default Recipes;
