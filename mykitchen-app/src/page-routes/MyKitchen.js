import React, {Compononet} from 'react';
import { Link} from "react-router-dom";

import RecipeCard from "../components/RecipeCard.js";


import '../css-sheets/index.css';

let baseURL = "";

if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3000";
} else {
    baseURL =
}
console.log("current base url", baseURL);


class Mykitchen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
}
