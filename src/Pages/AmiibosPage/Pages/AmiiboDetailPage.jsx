import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AmiiboItem } from "./components/AmiiboItem/AmiiboItem";

export function AmiiboDetailPage () {

    const tail = useParams().tail;

    const [amiibo, setAmiibo] = useState({});


    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'amiibo?tail=' + tail).then(res => {
            const amiibo = res.data.amiibo[0];
            setAmiibo(amiibo);
        })
    }, [])

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibo Detail</h1>
            <AmiiboItem amiibo={amiibo}/>
        </div>
    );
}