import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
const HouseDetails = () => {
        const [house, setHouse] = useState([])
const id = useParams().id
const url = `http://localhost:5000/houses?id=${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>data[0])
            .then(dataHouse=>setHouse(dataHouse))
    }, [url])
  return <div></div>;
};

export default HouseDetails;
