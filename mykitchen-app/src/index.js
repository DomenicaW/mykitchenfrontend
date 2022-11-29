import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';


import "./css-sheets/index.css";

import App from "./App";


// const container = document.getElementById('root');
// const root = createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);
