import axios from 'axios';
import React, { Component, Fragment } from 'react';

import './DetailPost.css';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount() {
        let id = this.props.match.params.idPost;
        axios.get(`http://localhost:304/posts/${id}`).then(res => {
            console.log('result:', res);
            let postCuy = res.data;
            this.setState({
                post: {
                    title: postCuy.title,
                    body: postCuy.body
                }
            })
        })
    }
    render() {
        return (
            <Fragment>
                <p>Detail Post</p>
                <hr />
                <div className="detail-post">
                    <p className="post-title">{this.state.post.title}</p>
                    <p className="post-body">{this.state.post.body}</p>
                </div>
            </Fragment>
        )
    }
}
export default DetailPost;