import CONFIG from '../config'
import axios from 'axios'

export default class PostsService {
    
    

    static myPosts() {
        return axios.get(`${CONFIG.API_URL_BASE}/posts/${localStorage.getItem('name')}`,
         {
            headers: {
                authorization: localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
        })
    }

    static create(post) {
        return axios.post(`${CONFIG.API_URL_BASE}/post`,
            {
                'title': post.title,
                'description': post.description,
                'text': post.text,
                'image': post.image
            },
            {
                headers: {
                    authorization: localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
    }



    static delete(id) {
        return axios.delete(`${CONFIG.API_URL_BASE}/post/${id}`,
          
            {
                headers: {
                    authorization: localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            }

        )
    }




}