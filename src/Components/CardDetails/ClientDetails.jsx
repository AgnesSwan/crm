import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
const ClientDetails = () => {
      const [client, setClient] = useState([])
const id = useParams().id
const url = `http://localhost:5000/clients?id=${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>data[0])
            .then(dataClient=>setClient(dataClient))
    }, [url])
  return (
  <div><h2>hello</h2>
hiS
{url}
  <h1>hello {client.name}</h1>
  </div>
  );
};

export default ClientDetails;
