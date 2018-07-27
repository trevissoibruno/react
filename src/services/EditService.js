import CONFIG from '../config'
import axios from 'axios'

export default class EditService {


    static edit(post) {
        return axios.put(`${CONFIG.API_URL_BASE}/post/${post.id}`,

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


}