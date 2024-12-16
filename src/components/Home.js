import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getWaterBodies } from "../api"; // Імпортуємо функцію для API-запиту
import L from 'leaflet';

// Фіксуємо шляхи до маркерів
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Home = () => {
    const [waterBodies, setWaterBodies] = useState([]);

    useEffect(() => {
        const fetchWaterBodies = async () => {
            try {
                const data = await getWaterBodies();
                setWaterBodies(data);
            } catch (error) {
                console.error('Помилка під час отримання водойм:', error);
            }
        };

        fetchWaterBodies();
    }, []);

    return (
        <div className="flex-grow h-full">
            <MapContainer center={[48.3794, 31.1656]} zoom={6} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {waterBodies.map((body) => (
                    <Marker key={body.id} position={[body.latitude, body.longitude]}>
                        <Popup>
                            <strong>{body.name}</strong>
                            <br />
                            {body.description || 'Опис відсутній.'}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Home;
