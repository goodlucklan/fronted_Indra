import React from 'react'
import './styles/Nav.css'
export default function Nav() {
    return (
        <ul className="topnav">
            <li><a className="link" href="/home">Home</a></li>
            <li className="right"><a className="link" href="/">Logout</a></li>
        </ul>
    )
}
