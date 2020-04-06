import axios from 'axios'
import {IComment, INote} from "../helpers/types";

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
});


export const apiNotes = {
    async getNotes() {
        return await instance.get<INote[]>('posts').then((res) => {
            return res.data
        })
    },

};
