import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Calculs() {
   
    return (
        <div>
            <h2>Exercez vous à faire des opérations sans erreur!</h2>
            <nav>
            <Link to="/calculs/addition">Addition</Link>
            {"   "}
            <Link to="/calculs/soustraction">Soustraction</Link>
            {"   "}
            <Link to="/calculs/multiplication">Multiplication</Link>
            {"   "}
            <Link to="/calculs/division">Division</Link>
            </nav>
            <hr />
            <Outlet/>

        </div>
    )
}

export default Calculs
