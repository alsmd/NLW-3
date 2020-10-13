import React from 'react';
import mapMakerImg from '../imgs/map-marker.svg';
import {Link} from 'react-router-dom'; //utilizado no lugar no link
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/orfanato-mapa.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function OrfanatoMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças então esperando a sua visita :)</p>
                </header>


                <footer>
                    <strong>São paulo</strong>
                    <span>Itapecerica da Serra</span>
                </footer>
            </aside>
            <Map center={[-23.7388487,-46.7983935]} zoom={14} style={{width: '100%', height:'100%'}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* <TileLayer
                 url={"https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}"}
                  /> */}

                
            </Map>
                

            <Link to="/" className="criar-orfanato"> <FiPlus size={32} color="FFF"/></Link>
        </div>
    )
}

export default OrfanatoMap;