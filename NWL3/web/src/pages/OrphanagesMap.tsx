import React from "react";
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/map-maker.svg';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Fernandópolis</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
        </div>
    );
}

export default OrphanagesMap;