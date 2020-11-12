
import axios from 'axios';
import { getItem } from '../services/localstorage';

const baseUrl = 'http://localhost:4002/api';

const api = {
    doLogin(username, password) {
        return axios.post(`${baseUrl}/admin/login`, { username, password })
    },
    addUser(userInfo) {
        return axios.post(`${baseUrl}/users/add`, userInfo)
    },
    loadUsers() {
        return axios({
            method: 'get', url: `${baseUrl}/users`, headers: {
                Authorization: `Bearer ${getItem('authToken')}`
            }
        })
    },
    checkSsn(ssn) {
        return axios({
            method: 'get', url: `${baseUrl}/users/check/${ssn}`, headers: {
                Authorization: `Bearer ${getItem('authToken')}`
            }
        })
    }
}

export default api;

