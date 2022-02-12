import React,{Component} from 'react';
import {updateBook} from '../Api.js'
// function MoveBook ({id, shelf}){

// }

class BookCard extends Component {
    moveBook = (e) => {
        alert("The book added to selected shelf successfully")
        updateBook(this.props.book_id , e.target.value).then(
            this.props.shelfCallback())
        // alert("The book added to" + e.target.value +" successfully")
    }
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
                             backgroundImage: this.props.book_img ?
                                 `url(${this.props.book_img})`: 'url("../icons/Closed_Book.png")',
                            }}
                            ></div>
                            <div className="shelf-shfiter">
                                <select onChange={(e) => this.moveBook(e)} defaultValue={'DEFAULT'}>
                                    <option value="move" value="DEFAULT" disabled>
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
                    {/* <a className='btn' href={`/book-details/${this.props.book_id}`}>More details</a> */}
                </li>
            </div>
        ) 
    } 
}
export default BookCard;