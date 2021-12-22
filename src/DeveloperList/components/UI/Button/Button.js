import React from 'react'

import classes from './Button.module.css'

const Button = ({children , disabled , className , orange , ...rest }) => {
    return (
        <button
            disabled={disabled}
            className={`${classes.base_button} ${orange ? classes.orange : ''}`}
            {...rest} 
        >
            {children}
        </button>
    )
}

export default Button
