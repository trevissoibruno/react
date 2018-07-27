import CONFIG from '../config'
import axios from 'axios'

export default class LoginService {

    static login(email, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/blogger`, {
            email,
            password
        })
    }




    static logout(email, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/bloggerLogout`, {
        }, {
            headers: {
                authorization: localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
            }
        ).then((result) => {
            localStorage.removeItem('token')
            return result
        })
    }


    

}