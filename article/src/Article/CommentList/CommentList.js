import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './CommentList.css';

class CommentList extends Component {
    render() {
        return (
            <div className="CommentList">
                <Comment author="Aragorn" date="20.12.20" content="You have my sword" />
                <Comment author="Legolas" date="20.12.20" content="And you have my bow" />
                <Comment author="Gimli" date="20.12.20" content="And my axe" />
            </div>
        )
    }
}

export default CommentList;