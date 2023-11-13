import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: '1'
        },
        isUpdate: false,
        comments: []
    }
    //Lokal get API
    // getPostAPI = () => {
    //     axios.get('http://localhost:304/posts?_sort=id&_order=desc')
    //         .then(resCuy => {
    //             this.setState({
    //                 post: resCuy.data
    //             })
    //         })
    // }

    //Global get API
    getPostAPI = () => {
        API.getNewsBlog().then(resCuy => {
            this.setState({
                post: resCuy
            })
        });
        API.getComments().then(resCuy => {
            this.setState({
                comments: resCuy
            })
        })
    }


    //POST DATA LOKAL
    // postDataAPI = () => {
    //     axios.post('http://localhost:304/posts', this.state.formBlogPost).then((res) => {
    //         console.log(res);
    //         this.getPostAPI();
    //         this.setState({
    //             formBlogPost: {
    //                 id: 1,
    //                 title: '',
    //                 body: '',
    //                 userId: '1'
    //             }, isUpdate: false

    //         })
    //     }, (err) => {
    //         console.log(err);
    //     })

    // }
    //Post data Global
    postDataAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then((result) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: '1'
                }, isUpdate: false

            })
        })
    }
    //PUT dengan Lokal
    // putDataToApi = () => {
    //     axios.put(`http://localhost:304/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
    //         console.log(res);
    //         this.getPostAPI();
    //         this.setState({
    //             formBlogPost: {
    //                 id: 1,
    //                 title: '',
    //                 body: '',
    //                 userId: '1'
    //             }, isUpdate: false

    //         })
    //     })
    // }


    //put dengan GLOBAL
    putDataToApi = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: '1'
                }, isUpdate: false

            })
        })
    }
    handleformOnChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    //menggunakan LOkal DELETE
    // handleRemove = (data) => {
    //     axios.delete(`http://localhost:304/posts/${data}`).then((res) => {
    //         this.getPostAPI();
    //     });
    // }

    //menggunakan GLOBAL DELETE
    handleRemove = (data) => {
        API.deleteNewsBlog(data).then((res) => {
            this.getPostAPI();
        })
    }
    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

    }
    handleSave = () => {
        if (this.state.isUpdate) {
            this.putDataToApi();
        } else {
            this.postDataAPI();
        }
    }
    handleDetail = (idPost) => {
        this.props.history.push(`detail-post/${idPost}`)
    }
    componentDidMount() {
        //get api using fect
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        //get api using axios
        this.getPostAPI();
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add post name ..." onChange={this.handleformOnChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" onChange={this.handleformOnChange} />
                    <button className="btn btn-save" onClick={this.handleSave}>Save</button>
                </div>
                {/* {
                    this.state.comments.map(comments => {
                        return (
                            <div className="form-add-post">
                                <p>Name  : {comments.name}</p>
                                <hr />
                                <p>Email : {comments.email}</p>
                            </div>
                        )


                    })
                } */}
                {
                    this.state.post.map(post => {
                        return (<Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />)
                    })
                }

            </Fragment>


        )
    }
}

export default BlogPost;