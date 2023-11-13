import React from 'react';

const Post = (Props) => {
    return (
        <div className="possts">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/200/tech" alt="" />
            </div>
            <div className="content">
                <div className="dummy-title" onClick={() => Props.goDetail(Props.data.id)}>{Props.data.title}</div>
                <div className="desc">{Props.data.body}</div>
                <button className="btn btn-update" onClick={() => { Props.update(Props.data) }}>Update</button>
                <button className="btn btn-remove" onClick={() => { Props.remove(Props.data.id) }}>Remove</button>
            </div>
        </div>
    )
}

export default Post;