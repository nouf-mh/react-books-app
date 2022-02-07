import React, { Component } from "react";
import { Routes, Route} from "react-router-dom";
import "./assets/css/App.css";
//import "./App.css";
import Home from "./views/Home.js" 


export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/book-details/:id" element={<BookDetails />} /> */}
        </Routes>
      </div>
    );
  }
}
