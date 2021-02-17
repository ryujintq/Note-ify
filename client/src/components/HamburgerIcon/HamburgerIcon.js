import React from 'react'
import './HamburgerIcon.css'

const HamburgerIcon = ({ className }) => {
    return (
        <div className={className}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    )
}

export default HamburgerIcon
