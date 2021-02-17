import React from 'react'
import { Link } from 'react-router-dom'
import './LinkText.css'

const LinkText = ({ to, text }) => {
    return (
        <Link to={to} className='link'>{text}</Link>
    )
}

export default LinkText
