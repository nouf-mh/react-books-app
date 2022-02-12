import React, { Component } from "react";
import "../assets/css/App.css";
import Shelf from "../components/Shelf.js"
import {getAllBooks,searchBook} from "../Api.js"
import {Link } from "react-router-dom";

export default class Home extends Component {
     constructor(props){
       super(props)
       this.state = {books:[],searchedBooks:[]}
     }
    componentDidMount(){
       getAllBooks().then((books)=> this.setState({books}))
      }
    reloadBook = ()=>{
      getAllBooks().then((books)=> this.setState({books}))
    }
    filterBooks = (e) => {
      if(e.target.value) {
        searchBook(e.target.value).then((searchedBooks)=>{
        if(searchedBooks.length > 0 )
          this.setState({searchedBooks})
        })
      }else
        getAllBooks().then((books)=> this.setState({books}))
    }
  render() {
      const types_of_shelfs = [
        {name:"Currently Reading",value:"currentlyReading"},
        {name:"Want to Read",value:"wantToRead"},
        {name:"Read",value:"read"},
      ]
    return (
      <div>
        <div className="books-list">
            <div className="search-results">
              <ol className="books-box"></ol>
            </div>
          <div className="books-list_content">
            <div>
                {types_of_shelfs.map((types_of_shelf,i) => {
                    return(
                        <Shelf parentCallback = {this.reloadBook} key={i} shelf_name={types_of_shelf.name} shelf_value={types_of_shelf.value} books={this.state.books} />
                    )}
                )}
            </div>
            {/* <div>
                {this.state.searchedBooks.map((searchedBook,i) => {
                    return(
                      <BookCard key={i} book_name={searchedBook.title} book_authors={searchedBook.authors} book_img={searchedBook.imageLinks.smallThumbnail}/>
                    )}
                )}
            </div> */}
          </div>
          <div className="search-btn">
            <button><Link className="close-btn-bar" to="/search"></Link></button>
          </div>
        </div>
      </div>
    );
  }
}
