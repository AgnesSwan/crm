import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { AiTwotoneHome } from 'react-icons/ai';
import home from '../../assets/house.jpg'

const HouseDetails = () => {
  const [house, setHouse] = useState([])
  const id = useParams().id
  const url = `http://localhost:5000/houses?id=${id}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => data[0])
      .then(dataHouse => setHouse(dataHouse))
  }, [url])
  return (

    <div class=" bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col">
      <div className='flex flex-row'>
        <img class="w-1/4 h-56 object-cover object-center" src={home} alt="avatar" />
        <div className='flex flex-col ml-4 mt-8'>
         {house.title && <h1 class="text-2xl font-semibold text-gray-800">{house.title}</h1>}
         {house.name && <p class="py-2 text-lg text-gray-700">Właściciel: {house.name}</p>}
         {house.phone && <p class="py-2 text-lg text-gray-700">Tel: {(house.phone)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "-")}</p>}
        </div>
      </div>
      <div class="flex items-center px-6 py-3 bg-gray-900">
        <AiTwotoneHome className='text-white text-lg' />
        <h1 class="mx-3 text-white font-semibold text-lg">Home for sale</h1>
      </div>
      <div class="py-4 px-6">
        <div className='flex flex-col'>
          <div className='flex flex-row items-center mt-2'>
            <div className='flex flex-row'>{house.city?.map(h => <p className="mr-2 text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{h}</p>)}</div>
            {(house.districtGdansk || house.districtGdynia || house.districtGdynia) && <p className="mr-2 w-40 p-2 text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{(house.districtSopot && house.districtSopot[0].label) || (house.districtGdynia && house.districtGdynia[0].label) || (house.districtGdansk && house.districtGdansk[0].label)}</p>}
            {house.street && <p className="text-sm border border-sky-500 w-fit h-6 p-2 rounded bg-gray-100 opacity-70 flex items-center justify-center">ul. {house.street}</p>}

          </div>
          <div className='flex flex-row'>
            {house.homeType && house.homeType.map(ht => <p className="mr-2 mt-2 text-sm border border-sky-500 w-32 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{ht}</p>)}
            {house.iloscPokoi?.label && <p className=" mt-2 text-sm border border-sky-500 w-16 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center mr-2">{house.iloscPokoi.label} pokoje</p>}
            {house.metric && <p className=" mt-2 text-sm border border-sky-500 w-16 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{house.metric} m2</p>}

          </div>
          {house.floor && <p className=" mt-2 text-sm border border-sky-500 w-16 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{house.floor} piętro</p>}
        { house.price && <span className='flex flex-row items-center mt-2 mr-2'>Cena: {house.price && <p className="  text-sm border border-sky-500 w-24 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{house.price} PLN</p>}</span>}
        </div>
      </div>
    </div>
  )
};

export default HouseDetails;
