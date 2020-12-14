import React from 'react'
import "../App.css"

const Button1 = ({text}) => {
    return (
        <div>
             <button className="mybtn" type='submit'>{text}</button>
        </div>
    )
}

export default Button1
