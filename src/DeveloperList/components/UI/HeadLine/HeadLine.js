import React from 'react'

import classes from './headLine.module.css'

const HeadLine = (props) => {
    return (
        <div className={`
            ${classes.heading_line_main} 
            ${props.dev_heading ? classes.dev_heading : ''}
            ${props.review_heading ? classes.review_heading : ''}
        `}>
            {props.children} 
        </div>
    )
}

export default HeadLine
