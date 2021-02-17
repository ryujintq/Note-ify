import React from 'react'
import './Error.css'

const Error = ({ errorMessage }) => {
    return (
        <div>
            {errorMessage ? <p className='error'>{errorMessage}</p> : null}
        </div>
    )
}

export default Error
