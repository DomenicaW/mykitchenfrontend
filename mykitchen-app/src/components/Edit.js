
//
// import "../css-sheets/index.css";
// import "../css-sheets/RecipeCard.css"
//
// // import App from "../page-routes/Mykitchen/js";
// // import Recipes from "../page-routes/Recipes.js";
//
// class ShowCard extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         recipes: [],
//         id: this.props.id,
//         image: this.props.image,
//         name:this.props.name,
//         description: this.props.description,
//
//       };
//     }
//
//
//
//
//     render() {
//       console.log("id", this.state.recipes);
//       return (
//
//         <>
//         <div className= "redirectlinks">
//         <a href="/recipes/new">New Recipes</a>
//
//         <br>
//         </br>
//
//         <a href="/recipes"> Back to My Kitchen</a>
//         </div>
//
//         <div key = {this.props.id} className="RecipeSquare">
//         <div className="ImageCard">
//         <img src= {this.props.image} alt="Recipe Image" />
//         </div>
//
//         <h1> {this.props.description} </h1>
//
//         <h3 className="RecipeName"> {this.props.name}</h3>
//         // <h5 className="recipeDescription"> {this.props.description}</h5>
//         // <h3 className="recipeDuration"> {this.props.duration}</h3>
//         // <button className="newButton">New Recipe</button>
//         // <a href="/recipes/new">New Recipes</a>
//         // <a href="/recipes"> Back to My Kitchen</a>
//         </div>
//
//         </>
//       );
//     }
//
// }
//
//
//
//
//
//
//
// export default ShowCard;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class EditButtn extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return {
  
    }
  }
}
export default EditButtn;
