import axios from 'axios';
import { RootOnline, RootPath } from './Config';

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? RootOnline : RootPath}/${path}`, data).then((result) => {
            resolve(result)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Put;



