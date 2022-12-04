import React, {Component} from 'react';


class AddRecipe extends Component {

    constructor(props) {
      super(props);
        this.state = {
          name: "",
          image:"",
          description: "",
          duration: "",
        };
      }

      handleChange = event => {
        // const target = event.target;

        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.REACT_APP_BACKEND_URL , {
          method: 'POST',
          body: JSON.stringify({
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            duration: this.state.duration,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => res.json())
        .then(resJson => {
          this.props.handleSubmit(resJson.recipes);
          this.setState({
            name: "",
            image: "",
            description: "",
            duration: "",
          });

          // this.props.closeMOdal()
        })

        .catch(error => console.error({ Error: error }));

      };

      render() {
        return (
          <>
          <div className= "new-form">

          <h2> New Recipe </h2>

          <form onSubmit={this.handleSubmit}>
          <div className= "input-box">
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Title of Recipe"
            />
            <label htmlFor="name">Name</label>
            </div>



              <div className="input-box">
              <input type="text" id="name" name="image" onChange={this.handleChange} value={this.state.image} placeholder="Link to image here" />
              <label htmlFor="image">Link to Image</label>
              </div>

              <div className="input-box">
              <input type="text" id="name" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Enter instructions here" />
              <label htmlFor ="description">Description</label>
              </div>

              <div className="input-box">
              <input type="text" id="name" name="duration" onChange={this.handleChange} value={this.state.duration} placeholder="How long will it take?" />
              <label htmlFor="duration">Cook Time</label>
              </div>

              <div className="input-toggle">
              <input type="radio" id="name" name="checkbox" onChange={this.handleChange} value={this.state.used}/>
              <label for="check1">No Diet Restrictions</label>
              </div>

              <div className="input-toggle">
              <input type="radio" id="name" name="checkbox" onChange={this.handleChange} value={this.state.used}/>
              <label for="check2">Vegetarian </label>
              </div>

              <div className="input-toggle">
              <input type="radio" id="name" name="checkbox" onChange={this.handleChange} />
              <label for="check3">Not sure </label>
              </div>
              <div className="submit-button">

              <input type="submit" value="Submit Recipe" />
              </div>
              </form>

              </div>
              </>
        );
      }
    }

    export default AddRecipe;
