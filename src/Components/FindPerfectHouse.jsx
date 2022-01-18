import React from 'react'
import ListOfClients from './ListOfClients'
import ListOfHouses from './ListOfHouses'

const FindPerfectHouse = () => {
return (
    <div className="w-full flex flex-row">
    <ListOfClients />
    <ListOfHouses />
    </div>
)
}

export default FindPerfectHouse