import React,{Component} from 'react';
// import {updateBook} from '../api.js'
// function MoveBook ({id, shelf}){

// }

class BookCard extends Component {
    render(){
        const shelf_choices = [
            {text:"Currently Reading",value:"currentlyReading"},
            {text:"Want to Read",value:"wantToRead"},
            {text:"Read",value:"read"},
            {text:"None",value:"none"},
        ]
        return(
            <div>
                <li>
                    <div className="book">
                        <div className="book-position">
                            <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${this.props.book_img})`,
                            }}
                            ></div>
                            <div className="shelf-shfiter">
                                <select>
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                {shelf_choices.map((shelf_choice, i) => {
                                    return (
                                        <option key={i} value={shelf_choice.value}>
                                        {shelf_choice.text}
                                    </option>
                                    ) })}
                                </select>
                            </div>
                        </div>
                        <div className="book-title">
                            {this.props.book_name}
                        </div>
                        {this.props.book_authors.map((book_author, i) => {
                            return (
                                <div key={i} className="book-author">{book_author}</div>
                            ) })}
                    </div>
                </li>
            </div>
        ) 
    } 
}
export default BookCard;