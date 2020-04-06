import axios from 'axios'
import {IComment, IPost} from "../helpers/types";

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
});


export const apiPosts = {
    async getPosts() {
        return await instance.get<IPost[]>('posts').then((res) => {
            return res.data
        })
    },

};
