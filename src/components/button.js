import React from 'react'

const Button = ({bgcolor, text, onClick}) => {
    return (
        <button style={{backgroundColor: bgcolor}} className="btn" onClick={onClick}>{text}</button>
    )
}

export default Button
