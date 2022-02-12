import React, { Component } from "react";
import {getOneBook} from "../Api.js"
import {useParams} from 'react-router-dom';

export default class BookDetails extends Component {
    constructor(props){
        super(props)
        this.state = {selectedBook:{}}
    }
    componentDidMount(){
        // const {id} = useParams();
        // console.log(id)
        getOneBook(this.props.match.params.id).then((selectedBook)=> this.setState({selectedBook}))
    }
    render(){
       return(
        <div>
        {/* {this.state.selectedBook} */}
        </div>
        ) ;
    }   
}