import api from "../api";

import { addItem } from '../services/localstorage';

export function login(username, password, callback) {
    return async function (dispatch) {
        try {
            dispatch({ type: 'REQUEST_START', message: '' })
            const response = (await api.doLogin(username, password)).data;
            if (response.success) {
                dispatch({ type: 'REQUEST_END', message: response.message })
                dispatch({ type: "LOGIN_SUCCESS", user: response.data.user });
                addItem('authToken', response.data.user.authToken)
                callback();
            } else {
                dispatch({ type: 'REQUEST_ERROR', message: response.error.message })
            }
        } catch (err) {
            dispatch({ type: 'REQUEST_ERROR', message: err.message })
        }

    }
}