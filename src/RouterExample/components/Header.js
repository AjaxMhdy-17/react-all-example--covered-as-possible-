import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div className="header">
                logo
            </div>
            <div className="menu_item">
                <ul>
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts/">posts</Link>
                    </li>
                    <li>
                        <Link to="/signup/">signup</Link>
                    </li>
                </ul>
            </div>
            <hr /><hr />
        </div>
    )
}

export default Header
