import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
import './SensorDashboard.css'; // якщо є стилі для компонента

const SensorDashboard = () => {
    const [sensorData, setSensorData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Oxygen',
                data: [],
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'Biological Index',
                data: [],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Pollutant Concentration',
                data: [],
                borderColor: 'red',
                fill: false,
            },
            {
                label: 'Temperature',
                data: [],
                borderColor: 'orange',
                fill: false,
            },
            {
                label: 'Turbidity',
                data: [],
                borderColor: 'purple',
                fill: false,
            },
        ],
    });

    useEffect(() => {
        const fetchSensorData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/sensor-data/');
                const data = response.data;

                const newLabels = [...sensorData.labels, new Date().toLocaleTimeString()];
                const newData = {
                    labels: newLabels,
                    datasets: sensorData.datasets.map((dataset, index) => {
                        const newData = [...dataset.data, data[dataset.label.toLowerCase().replace(' ', '_')]];
                        return { ...dataset, data: newData };
                    }),
                };

                setSensorData(newData);
            } catch (error) {
                console.error('Помилка при отриманні даних:', error);
            }
        };

        const interval = setInterval(fetchSensorData, 2000);
        return () => clearInterval(interval);
    }, [sensorData]);

    return (
        <div className="sensor-dashboard">
            <h2>Показники сенсора в реальному часі</h2>
            <Line data={sensorData} />
        </div>
    );
};

export default SensorDashboard;
