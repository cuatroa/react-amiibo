import React from 'react';
import './AmiibosGallery.scss'

export function AmiibosGallery(props) {

    return (
        <div>
            <div className="row">
                {props.amiibos.map((item, index) =>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="c-amiibo-gallery__item-container">
                            <figure className="c-amiibo-gallery__item">
                                    <a href={'amiibos/' + item.tail}><img className="c-amiibo-gallery__img" src={item.image} alt=""/></a>
                                    <figcaption className="c-amiibo-gallery__caption">{item.name}</figcaption>
                            </figure>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}