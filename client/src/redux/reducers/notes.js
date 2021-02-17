const initialState = {
    notes: []
}

const notesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'set_notes':
            return { notes: [...payload] }
        case 'create_note':
            return { notes: [...state.notes, payload] }
        case 'edit_note':
            const { id, title, body } = payload
            const notesArr = state.notes
            const index = notesArr.findIndex(note => note._id === id)
            let noteToEdit = notesArr[index]
            noteToEdit.title = title
            noteToEdit.body = body
            return { notes: [...notesArr] }
        case 'delete_note':
            return {
                notes: state.notes.filter(note => {
                    return note !== payload
                })
            }
        default:
            return state
    }
}

export default notesReducer
