import React from 'react'
import { useHistory } from "react-router-dom"
import formatDate from '../../utils/formatDate'
import './Note.css'

const Note = ({ title, body, id, date }) => {
    const history = useHistory()
    const noteTitle = title.length > 40 ? title.slice(0, 40) + '...' : title
    const noteBody = body.length > 70 ? body.slice(0, 70) + '...' : body

    date = formatDate(date)

    const handleOnClick = () => {
        history.push({
            pathname: '/note-detail',
            state: { title, body, id }
        })
    }

    return (
        <div className='note' onClick={handleOnClick}>
            <div className="note-inner">
                <h2>{noteTitle}</h2>
                <small className='date'>{date.toString()}</small>
                <p className='body'>{noteBody}</p>
            </div>
        </div>
    )
}

export default Note
