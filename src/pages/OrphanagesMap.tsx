import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/Local.svg';
import '../styles/pages/OrphanagesMap.css';

function Orphanages(){
    return (
        <div id="page-map">

            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Choose an orphanage on the Map</h2>
                    <p>Many children are waiting for you</p>


                </header>

                <footer>
                    <strong>Australia</strong>
                    <span>Brisbane</span>
                </footer>
            </aside>

            <Map 
                center={[-27.4562657,153.0210961]}
                zoom={13.04}
                style={{width: '100%', height: '100%'}}
                className="map-orphanage"
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#000"></FiPlus>
            </Link>
        </div>
    );

}

export default Orphanages;