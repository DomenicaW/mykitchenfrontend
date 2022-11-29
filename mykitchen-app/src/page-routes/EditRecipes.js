// import React, {Component} from 'react';
// import RecipeCard from "../components/RecipeCard.js";
// import "../css-sheets/Edit.css";
//
// class EditRecipe extends Component {
//
//     constructor(props) {
//       super(props);
//         this.state = {
//           name: "",
//           image:"",
//           description: "",
//           duration: "",
//           used:"",
//           // recipes: [],
//           _id:"",
//         };
//       }
//       handleChange = recipe => {
//         // const target = event.target;
//
//         this.setState({
//           [recipe.target.name]: recipe.target.value,
//         });
//       };
//
//       handleToggleColor = (recipe) => {
//         fetch(process.env.REACT_APP_BACKEND_URL + recipe._id, {
//           method: 'PUT',
//           body: JSON.stringify({used: !recipe.used}),
//           headers: {
//             'Content-Type': 'application/json'
//           },
//         })
//         .then(res => res.json())
//           .then(resJson => {
//             const copyRecipes = [...this.state.recipes]
//             const findIndex = this.state.recipes.findIndex(recipe => recipe._id === resJson._id)
//             copyRecipes[findIndex].used = resJson.used
//             this.setState({recipes: copyRecipes})
//           });
//       };
//       // handleChange = event => {
//       //   // const target = event.target;
//       //
//       //   this.setState({
//       //     [event.target.name]: event.target.value,
//       //   });
//       // };
//       //
//       // handleSubmit = (event) => {
//       //   event.preventDefault();
//       //   fetch(process.env.REACT_APP_BACKEND_URL , {
//       //     method: 'POST',
//       //     body: JSON.stringify({
//       //       name: this.state.name,
//       //       image: this.state.image,
//       //       description: this.state.description,
//       //       duration: this.state.duration,
//       //     }),
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //   })
//       //   .then(res => res.json())
//       //   .then(resJson => {
//       //     this.props.handleSubmit(resJson.recipes);
//       //     this.setState({
//       //       name: "",
//       //       image: "",
//       //       description: "",
//       //       duration: "",
//       //     });
//       //
//       //     // this.props.closeMOdal()
//       //   })
//       //
//       //   .catch(error => console.error({ Error: error }));
//       //
//       // };
//
//       render() {
//         return (
//           <>
//           <div className= "new-form">
//
//           <h2> Edit Recipe </h2>
//
//           <form onSubmit={this.handleSubmit}>
//           <div className= "input-box">
//           <input
//             name="name"
//             onChange={this.handleChange}
//             value={this.state.name}
//             placeholder="Title of Recipe"
//             />
//             <label htmlFor="name">Name</label>
//             </div>
//
//
//
//               <div className="input-box">
//               <input type="text" id="name" name="image" onChange={this.handleChange} value={this.state.image} placeholder="Link to image here" />
//               <label htmlFor="image">Link to Image</label>
//               </div>
//
//               <div className="input-box">
//               <input type="text" id="name" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Enter instructions here" />
//               <label htmlFor ="description">Description</label>
//               </div>
//
//               <div className="input-box">
//               <input type="text" id="name" name="duration" onChange={this.handleChange} value={this.state.duration} placeholder="How long will it take?" />
//               <label htmlFor="duration">Total Time</label>
//               </div>
//
//               <div className="input-toggle">
//               <input type="radio" id="name" name="checkbox" onChange={this.handleChange} />
//               <label for="check1">No Diet Restrictions</label>
//               </div>
//
//               <div className="input-toggle">
//               <input type="radio" id="name" name="checkbox" onChange={this.handleChange} />
//               <label for="check2">Vegetarian </label>
//               </div>
//
//               <div className="input-toggle">
//               <input type="radio" id="name" name="checkbox" onChange={this.handleChange} />
//               <label for="check3">Not sure </label>
//               </div>
//
//               <input type="submit" value="Submit Recipe" />
//               // <td>
//               // <button className="deleteButton" onDoubleClick={() => this.handleToggleColor(this.state)}
//               // className={this.state.used ? 'used': null}>
//               // {this.state.name}
//               // </td>
//               </form>
//
//               </div>
//               </>
//         );
//       }
//     }
//
//     export default EditRecipe;
