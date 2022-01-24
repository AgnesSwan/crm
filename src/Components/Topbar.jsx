import React from 'react'
import { Link } from 'react-router-dom'
const Topbar = () => {
    return (
        <nav className="w-full shadow-xl">
            <ul className="flex flex-row">
                <li className="w-32 text-3xl font-semibold p-2 font-sans-Roboto">
                    AS CRM
                </li>
                <div className="flex-1" />

                <li className="w-fit text-lg p-2 hover:text-blue-500">
                    <Link to="/">Znajdź mieszkanie</Link>
                </li>
                <li className="text-lg p-2 hover:text-blue-500 w-fit"><Link to="/clientForm">Nowy klient</Link>
                </li>
                <li className="w-fit text-lg p-2 hover:text-blue-500">
                    <Link to="/addHouse">Nowe mieszkanie</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Topbar