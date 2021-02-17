import React from 'react'
import './Input.css'

const Input = ({ text, type, value, onChange }) => {
    return (
        <div className='form'>
            <input type={type} name={text} value={value} onChange={onChange} autoComplete="off" required />
            <label className='label' >
                <span className='content'>{text}</span>
            </label>
        </div>
    )
}

export default Input
