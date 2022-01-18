import React from 'react'
import {Link} from 'react-router-dom'
const Topbar = () => {
return (
<nav className="w-full">
<ul className="flex flex-row">
<li className="w-28 text-xl font-semibold p-2">
     AS CRM
    </li>
    <div className="flex-1"/>
    <li className="w-28 text-lg p-2"><Link to="/clientForm">Form</Link>
    </li>
    <li className="w-28 text-lg p-2">
        <Link to="/houseList">Find house</Link>
    </li>
</ul>
</nav>
)
}

export default Topbar