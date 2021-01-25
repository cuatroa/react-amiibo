import React from 'react';
import './AmiiboItem.scss'

export function AmiiboItem (props) {

    const amiiboInfo = props.amiibo;

    return (
        <div className="d-flex justify-content-center">
            <div className="c-amiibo-item">
                <div className="c-amiibo-item__item-container">
                    <figure className="c-amiibo-item__item">
                        <img src={amiiboInfo.image} alt="" className="c-amiibo-item__img"/>
                        <figcaption className="c-amiibo-item__caption">{amiiboInfo.name}</figcaption>
                    </figure>
                    <div className="py-4">
                        <p>Game serie: {amiiboInfo.gameSeries}</p>
                        <p>Amiibo serie: {amiiboInfo.amiiboSeries}</p>
                        <p>Character: {amiiboInfo.character}</p>
                        <p>Type: {amiiboInfo.type}</p>
                        {amiiboInfo && amiiboInfo.release && <p>Release: {amiiboInfo.release.jp}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}