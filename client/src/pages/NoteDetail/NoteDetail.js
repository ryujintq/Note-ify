import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editNote, deleteNote } from '../../redux/actions/notes'
import './NoteDetail.css'

const NoteDetail = ({ location: { state }, editNote, deleteNote }) => {
    const { body: noteBody, title: noteTitle, id } = state
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(noteTitle)
        setBody(noteBody)
    }, [noteTitle, noteBody])

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDelete = () => {
        deleteNote(state.id)
        history.goBack()
    }

    const handleSave = () => {
        editNote(id, title, body)
        history.goBack()
    }

    return (
        <div className='details-main'>
            <div className='top-section'>
                <textarea
                    className='note-input title-input'
                    value={title}
                    onChange={(e) => handleTitleOnChange(e)}
                    maxLength={50}
                />
                <i className="fas fa-trash-alt notedetail-icon" onClick={handleDelete}></i>
                <i className="fas fa-save notedetail-icon" onClick={handleSave}></i>
                <i className="fas fa-home notedetail-icon" onClick={() => history.push('/')}></i>
            </div>
            <textarea
                className='note-input body-input'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
        </div>
    )
}

NoteDetail.propTypes = {
    editNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
}

export default connect(null, { editNote, deleteNote })(NoteDetail)
