import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OompaDetailsPage = () => {
    const oompaId = useParams().id
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(
            `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus​/oompa-loompas/${oompaId}​`
        )
        .then((response) => console.log(response))
    },[])
    
    return (
        <h1>hola</h1>
    )
}

export default OompaDetailsPage;