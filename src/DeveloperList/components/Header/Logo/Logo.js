import React from 'react'
import { Link } from 'react-router-dom'
import classes from './logo.module.css'

import logo from '../../../assets/react_logo.svg' 

function Logo() {
    return (
        <Link to='/'>
           <img src={logo} alt="logo" /> 
        </Link>
    )
}

export default Logo
