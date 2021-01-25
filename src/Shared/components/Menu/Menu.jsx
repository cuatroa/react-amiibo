import React from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom';

export function Menu () {

    return (
        <div>
            <nav className="c-menu">
                <Link className="c-menu__link" to="/">Home</Link>
                <Link className="c-menu__link" to="/amiibos">Amiibos</Link>
                <Link className="c-menu__link" to="/gameseries">Game Series</Link>
                <Link className="c-menu__link" to="/contact">Contact</Link>                
            </nav>
        </div>

    );
}
