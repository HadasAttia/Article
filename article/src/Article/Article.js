import React, { Component } from 'react';
import './Article.css';
import CommentList from './CommentList/CommentList';

class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Article">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <img src={this.props.route} alt=""/>
                <CommentList />
            </div>
        )
    }
}

export default Article;