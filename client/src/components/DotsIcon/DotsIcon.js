import React from 'react'
import './DotsIcon.css'

const DotsIcon = ({ className }) => {
    return (
        <div className={className}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    )
}

export default DotsIcon
