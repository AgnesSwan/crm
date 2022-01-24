import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import home from '../assets/house.jpg'
import { Link } from 'react-router-dom'


const ListOfHouses = () => {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/houses')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])
    return (
        <ul className="w-full flex flex-col items-center border-r border-indigo-600 ">
            {houses.map((house) =>
                <li className="w-11/12 p-2 mb-4 border flex flex-row" key={house.id}>
                    <img src={home} className="w-1/5 mr-2" alt="house" />
                    <div className="w-2/5 m-0">
                        <Link to={`houseList/${house.id}`}><h1 className="font-semibold text-xl hover:text-blue-500">{house.title}</h1></Link>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='flex flex-row'>{house.city?.map(h => <p className="mr-2 text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{h}</p>)}</div>
                           {(house.districtGdansk || house.districtGdynia || house.districtGdynia) && <p className="mr-2 w-40 p-2 text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{(house.districtSopot && house.districtSopot[0].label) || (house.districtGdynia && house.districtGdynia[0].label) || (house.districtGdansk && house.districtGdansk[0].label)}</p>}
                        </div>
                        <div className="flex flex-row wrap mt-2">
                            {house.iloscPokoi?.label && <p className=" text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center mr-2">{house.iloscPokoi?.label} pokoje</p>}
                            {house.metric && <p className=" text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center mr-2">{house.metric}m2</p>}
                            {house.floor && <p className=" text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{house.floor}m2</p>}
                        </div>
                    </div>
                    <div className="w-2/5 m-0 flex items-end flex-col">
                        <h1 className="text-blue-500 text-lg">{(house.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} PLN</h1>
                        <h3 className="text-gray-400 text-xs">{(house.price / house.metric).toFixed(2)} PLN/m2</h3>
                    </div>

                </li>
            )}
        </ul>
    )
}

export default ListOfHouses