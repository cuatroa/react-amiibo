import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AmiibosGallery } from './components/AmiibosGallery/AmiibosGallery';
import { AmiiboSearch } from './components/AmiibosSearch/AmiibosSearch';

let allAmiibos = [];

export default function AmiibosPage(){

    const [filteredAmiibos, setFilteredAmiibos] = useState([]);
    console.log('total',allAmiibos);
    console.log('filtered',filteredAmiibos);

    useEffect(() => {
            axios.get(process.env.REACT_APP_BACK_URL + 'amiibo').then(res => {
                const amiibosLocal = res.data.amiibo;
                allAmiibos = amiibosLocal;
                setFilteredAmiibos(amiibosLocal)
            })
    }, [])

    const filterAmiibos = (filterValues) => {
        const filteredLocalAmiibos = [];

        for (const amiibo of allAmiibos) {
            let amiiboIsOk = true;
            for (const key in filterValues) {
                if (filterValues.hasOwnProperty(key)) {
                    const localValue = amiibo[key];
                    const filterValue = filterValues[key];
                    if (!localValue || (localValue && filterValue && filterValue !== '' && !localValue.toLowerCase().includes(filterValue.toLowerCase()))) {
                        amiiboIsOk = false;
                        break;
                    }
                }
            }
            if (amiiboIsOk) {
                filteredLocalAmiibos.push(amiibo);
            }
        }

        setFilteredAmiibos(filteredLocalAmiibos);
    }

    return(
        <div>
            <h1>Amiibos</h1>
            <AmiiboSearch fnSubmit={filterAmiibos}/>
            <AmiibosGallery amiibos={filteredAmiibos}/>
        </div>
    )
}