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
        const target = event.target;

        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
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
          this.props.handleAddRecipe(resJson);
          this.setState({
            name: "",
            image: "",
            description: "",
            duration: "",
          });
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
              <input type="text" id="name" name="type" onChange={this.handleChange} value={this.state.type} placeholder="Enter Text Here" />
              <label htmlFor="type">Name</label>
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
              <label htmlFor="duration">Total Time</label>
              </div>

              <input type="submit" value="Submit Recipe" />
              </form>

              </div>
              </>
        );
      }
    }

    export default AddRecipe;
