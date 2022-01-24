import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'

const ListOfClients = () => {
    const [clients, setClients] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <ul className="w-full flex flex-col items-center border-r border-indigo-600">
            {clients?.map((client) =>
                <li className="w-11/12 p-2 border flex flex-row mb-4" key={client.id}>
                    <img src={user} className="w-1/5 mr-2" alt="user" />
                    <div className="w-2/5 m-0">
                        <Link to={`/clientList/${client.id}`}><h1 className="font-semibold text-xl hover:text-blue-500">{client.name}</h1></Link>
                        <div className='flex flex-row mt-2'> {client.city?.map(c => <p className="mr-2 text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{c}</p>)}</div>
                        {client.iloscPokoi?.label && <p className=" mt-2 text-sm border border-sky-500 w-16 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{client.iloscPokoi.label} pokoje</p>}
                    </div>
                    <div className="w-2/5 m-0 flex items-end flex-col">
                        <h1 className="text-blue-500 ">{(client.phone).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h1>
                        <h1 className="text-blue-500 ">{client.email}</h1>
                    </div>

                </li>
            )}
        </ul>
    )
}

export default ListOfClients