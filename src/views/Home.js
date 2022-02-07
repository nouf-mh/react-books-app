import React, { Component } from "react";
import "../assets/css/App.css";
import Shelf from "../components/Shelf.js"
import {getAllBooks,searchBook} from "../Api.js"

function filterBooks({inputText}){
  searchBook(inputText).then((books)=> this.setState({books}))
}
export default class Home extends Component {
     constructor(props){
       super(props)
       this.state = {books:[]}
     }
    componentDidMount(){
       getAllBooks().then((books)=> this.setState({books}))
      //  this.props.match.params.id
      }
  filterBooks = (e) => {
    if(e.target.value) {
      searchBook(e.target.value).then((books)=>{
      if(books.length > 0 )
        this.setState({books})
      console.log('books',books)
      console.log('this.state.books',this.state.books) }
      )
    }else
      getAllBooks().then((books)=> this.setState({books}))
  }
  render() {
      const types_of_shelfs = [
        {text:"Currently Reading",value:"currentlyReading"},
        {text:"Want to Read",value:"wantToRead"},
        {text:"Read",value:"read"},
      ]
    return (
      <div>
        <div className="books-list">
          <div className="books-list_title">
            <h1>NReads</h1>
          </div>
            <div className="search-container-bar">
              <button
                className="close-btn-bar"
               
              >
                Close
              </button>
              <div className="input-wrapper">
                <input type="text" placeholder="Search..." onInput={(e) => this.filterBooks(e)}/>
              </div>
            </div>
            <div className="search-results">
              <ol className="books-box"></ol>
            </div>
          <div className="books-list_content">
            <div>
                {types_of_shelfs.map((types_of_shelf,i) => {
                    return(
                        <Shelf key={i} shelf_name={types_of_shelf.name} shelf_value={types_of_shelf.value} books={this.state.books} />
                    )}
                )}
            </div>
          </div>
          <div className="search-btn">
            <button>Add a book</button>
          </div>
        </div>
      </div>
    );
  }
}
