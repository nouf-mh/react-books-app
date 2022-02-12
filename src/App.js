import React, { Component } from "react";
import { Routes, Route} from "react-router-dom";
import "./assets/css/App.css";
import Home from "./views/Home.js" 
import Search from './views/SearchPage.js'
import BookDetails from './views/BookDetails.js'
import Nav from "./layout/Nav.js"

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/book-details/:id" element={<BookDetails />} />
        </Routes>
      </div>
    );
  }
}
