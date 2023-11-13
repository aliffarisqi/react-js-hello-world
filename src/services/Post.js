import axios from 'axios';
import { RootOnline, RootPath } from './Config';

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? RootOnline : RootPath}/${path}`, data).then((result) => {
            resolve(result)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Post;