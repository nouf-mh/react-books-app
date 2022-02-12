import React, { Component } from "react";
import {searchBook} from "../Api.js"
import BookCard from '../components/BookCard.js'
import {Link } from "react-router-dom";

export default class SearchPage extends Component {

  constructor(props){
    super(props)
    this.state = {books:[]}
  }
  filterBooks = (e) => {
    if(e.target.value) {
      searchBook(e.target.value).then((books)=>{
      if(books.length > 0 )
        this.setState({books})
      })
    }else{
      this.setState({books:[]})
    }
  }
  render(){
    return (
        <div className="main">
          <div className="search-container">
            <div className="search-container-bar">
              <button
                className="close-btn-bar"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="input-wrapper">
                <input type="text" placeholder="Search..." onInput={(e) => this.filterBooks(e)}/>
              </div>
            </div>
            <div>
              <Link className="centerd-item" to="/">Back To Home</Link>
            </div>
            <ol className="books-box">
              {this.state.books.map((book,i) => {
                return(
                  <BookCard key={i} book_id={book.id} book_name={book.title} book_authors={book.authors} book_img={book.imageLinks.smallThumbnail}/>
                )}
              )} 
            </ol>
          </div>
        </div>
      );
  }
}
