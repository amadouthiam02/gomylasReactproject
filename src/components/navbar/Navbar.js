import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            {"   "}
            <Link to="/calculs">Calculs</Link>
            </nav>

       

       

        </div>
    )
}

export default Navbar
