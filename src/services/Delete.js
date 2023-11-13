import axios from 'axios';
import { RootOnline, RootPath } from './Config';

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? RootOnline : RootPath}/${path}`)
            .then(resCuy => {
                resolve(resCuy.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Delete;
