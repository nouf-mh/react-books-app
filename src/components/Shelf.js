import React, { Component } from 'react';
import BookCard from './BookCard.js'

class Shelf extends Component{
    render(){
        return(
            <div className="shelf">
                <h2 className="shelf-title">{this.props.shelf_name}</h2>
                <div className="shelf-books">
                    <ol className="books-box">
                        {this.props.books.filter((book) => book.shelf === this.props.shelf_value).map((book, i) => {
                        return (
                            <BookCard key={i} book_name={book.title} book_authors={book.authors} book_img={book.imageLinks.smallThumbnail}/>
                        );
                        })}
                    </ol>
                </div>
          </div>
        )
    }
}
export default Shelf;