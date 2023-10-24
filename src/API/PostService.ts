import axios from "axios/index";

export default class PostService {
    static async getAll(limit:number, page:number) {
        const response:any = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }
    static async getById(id:any) {
        const response:any = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response;
    }
    static async getCommentsById(id:any) {
        const response:any = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        return response;
    }
}