import notesAPI from '../../api/notes'

export const getAllNotes = () => async dispatch => {
    try {
        const response = await notesAPI.get('/notes')
        dispatch({ type: 'set_notes', payload: response.data.data })
    } catch (err) {
        console.log(err)
    }
}

export const createNote = (title, body) => async (dispatch) => {
    try {
        const response = await notesAPI.post('/notes', { title, body })
        dispatch({ type: 'create_note', payload: response.data.data })
    } catch (err) {
        console.log(err)
    }
}

export const editNote = (id, title, body) => async (dispatch) => {
    try {
        await notesAPI.put(`/notes/${id}`, { title, body })
        dispatch({ type: 'edit_note', payload: { id, title, body } })
    } catch (err) {
        console.log(err)
    }
}

export const deleteNote = id => async dispatch => {
    try {
        await notesAPI.delete(`notes/${id}`)
        dispatch({ type: 'delete_note', payload: id })
    } catch (err) {
        console.log(err)
    }
}