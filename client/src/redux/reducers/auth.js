const initialState = {
    token: localStorage.getItem('token'),
    errorMessage: ''
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'login':
            return { token: payload, errorMessage: '' }
        case 'sign_out':
            return { token: '', errorMessage: '' }
        case 'add_error':
            return { ...state, errorMessage: payload }
        case 'clear_error':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}

export default authReducer