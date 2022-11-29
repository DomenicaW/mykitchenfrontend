import React, {Component} from 'react';

import "../css-sheets/Navigation.css";

import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
      return (
        <div className= "NavLinks">
        <nav>
        <ul>
        <Link className="Link" to ='./new'> New Recipes</Link>
        </ul>
        </nav>
        </div>
      );
    }
}
export default Nav;
