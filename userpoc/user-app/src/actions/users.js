
import api from '../api'

export function loadUsers() {
  return async function (dispatch) {
    try {
      dispatch({ type: 'REQUEST_START', message: 'loading users...' }) // async action
      const response = (await api.loadUsers()).data;
      if (response.success) {
        dispatch({ type: 'REQUEST_END', message: '' }) // async action
        dispatch({ type: 'LOAD_USERS_SUCCESS', users: response.data.users })
      } else {
        dispatch({ type: 'REQUEST_ERROR', message: response.error.message })
      }
    } catch (err) {
      dispatch({ type: 'REQUEST_ERROR', message: err.message })
    }
  }
}

export function addUser(userInfo, callback) {
  return async function (dispatch) {
    try {
      dispatch({ type: 'REQUEST_START', message: 'loading users...' })
      const response = (await api.addUser(userInfo)).data;
      if (response.success) {
        dispatch({ type: 'REQUEST_END', message: response.message }) // async action
        callback();
      } else {
        dispatch({ type: 'REQUEST_ERROR', message: response.error.message })
        callback(response.error.message)
      }
    } catch (err) {
      dispatch({ type: 'REQUEST_ERROR', message: err.message })
    }
  }
}

export function checkSsn(ssn, callback) {
  return async function (dispatch) {
    try {
      dispatch({ type: 'REQUEST_START', message: 'loading users...' })
      const response = (await api.checkSsn(ssn)).data;
      if (response.success) {
        dispatch({ type: 'REQUEST_END', message: response.message })
        if (response.data.exist) {
          dispatch({ type: 'REQUEST_ERROR', message: "SSN already exists" })
        } else {
          callback();
        }
      }
    } catch (err) {
      dispatch({ type: 'REQUEST_ERROR', message: err.message })
    }
  }
}

