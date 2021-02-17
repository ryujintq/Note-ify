import notesAPI from '../../api/notes'

export const login = (email, password) => async dispatch => {
    try {
        const response = await notesAPI.post('/users/login', { email, password })
        const token = response.data.data
        localStorage.setItem('token', token)
        dispatch({ type: 'login', payload: token })
    } catch (err) {
        dispatch({ type: 'add_error', payload: err.response.data.message })
    }
}

export const signup = (name, email, password) => async dispatch => {
    try {
        const response = await notesAPI.post('/users/signup', { name, email, password })
        const token = response.data.data
        localStorage.setItem('token', token)
        dispatch({ type: 'login', payload: token })
        return true
    } catch (err) {
        dispatch({ type: 'add_error', payload: err.response.data.message })
    }
}

export const signout = () => async dispatch => {
    try {
        dispatch({ type: 'sign_out' })
    } catch (err) {
        dispatch({ type: 'add_error', payload: err.response.data.message })
    }
}

export const setAuthError = (errorMessage) => dispatch => {
    dispatch({ type: 'add_error', payload: errorMessage })
}

export const clearAuthError = () => dispatch => {
    dispatch({ type: 'clear_error' })
}