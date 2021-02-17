import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createNote } from '../../redux/actions/notes'
import './CreateNote.css'

const CreateNote = ({ createNote }) => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSave = () => {
        createNote(title, body)
        history.goBack()
    }

    return (
        <div className='create-main'>
            <div className='create-top-section'>
                <textarea
                    className='create-note-input create-title-input'
                    value={title}
                    onChange={(e) => handleTitleOnChange(e)}
                    maxLength={50}
                    placeholder='Title...'
                />
                <i className="fas fa-save create-icon" onClick={handleSave}></i>
                <i className="fas fa-home create-icon" onClick={() => history.push('/')}></i>
            </div>
            <textarea
                className='create-note-input create-body-input'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='Context...'
            />
        </div>
    )
}

CreateNote.propTypes = {
    createNote: PropTypes.func.isRequired
}

export default connect(null, { createNote })(CreateNote)
