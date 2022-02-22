import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OompaDetailsPage.css";

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
        <div className="container-oompa-details">
        <h1>hola</h1>

        </div>
    )
}

export default OompaDetailsPage;