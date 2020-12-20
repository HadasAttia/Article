import React,{ Component } from 'react';
import './Comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Comment">
                <div className="about">
                    <span className="author">{this.props.author}</span>
                    <span className="date">{this.props.date}</span>
                    <p className="content">{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Comment;