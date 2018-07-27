import CONFIG from '../config'
import axios from 'axios'

export default class PostsService {
    
    

    static getPosts(id) {
        return axios.get(`${CONFIG.API_URL_BASE}/post/${localStorage.getItem('name')}/${id}`,
         {
            headers: {
                authorization: localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
        })
    }



}