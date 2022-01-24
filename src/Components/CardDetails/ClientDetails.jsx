import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { AiTwotoneHome } from 'react-icons/ai';
import user from '../../assets/user.png'


const ClientDetails = () => {
  const [client, setClient] = useState([])
  const id = useParams().id
  const url = `http://localhost:5000/clients?id=${id}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => data[0])
      .then(dataClient => setClient(dataClient))
  }, [url])
  return (

    <div class=" bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col">
      <div className='flex flex-row'>
        <img class="w-1/4 h-56 object-cover object-center" src={user} alt="avatar" />
        <div className='flex flex-col ml-4 mt-8'>
         {client.name && <h1 class="text-2xl font-semibold text-gray-800">{client.name}</h1>}
         {client.phone && <p class="py-2 text-lg text-gray-700">{(client.phone)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>}
         {client.email && <p class="py-2 text-lg text-gray-700">{client.email}</p>}
        </div>
      </div>
      <div class="flex items-center px-6 py-3 bg-gray-900">
        <AiTwotoneHome className='text-white text-lg' />
       {client.clientType && <h1 class="mx-3 text-white font-semibold text-lg">{client.clientType}</h1>}
      </div>
      <div class="py-4 px-6">
        <div className='flex flex-row'> {client.city?.map(c => <p className="mr-2 text-sm border border-sky-500 w-14 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{c}</p>)}</div>
        <div className='flex flex-row'> {client.homeType?.map(ht => <p className="mr-2 mt-2 text-sm border border-sky-500 w-32 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{ht}</p>)}</div>

        {client.iloscPokoi?.label && <p className=" mt-2 text-sm border border-sky-500 w-16 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{client.iloscPokoi.label} pokoje</p>}
        {client.floor && <p className=" mt-2 text-sm border border-sky-500 w-16 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{client.floor} piętro</p>}
       {client.price && <span className='flex flex-row items-center mt-2 mr-2'>Górna granica cenowa: {client.price && <p className="  text-sm border border-sky-500 w-24 h-6 rounded bg-gray-100 opacity-70 flex items-center justify-center">{client.price} PLN</p>}</span>}
        {client.comment && <div className='mt-2 text-sm border border-sky-500 w-1/4 h-32 rounded bg-gray-100 opacity-70 flex wrap p-4'>{client.comment}</div>}
      </div>
    </div>


  );
};

export default ClientDetails;
