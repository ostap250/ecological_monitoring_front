import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Evaluation = () => {
    const [rivers, setRivers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/rivers/');
            setRivers(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Оцінка стану водойм</h2>
            {rivers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Назва річки</th>
                            <th>Місцезнаходження</th>
                            <th>Індекс забруднення</th>
                            <th>Стан</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rivers.map(river => (
                            <tr key={river.id}>
                                <td>{river.name}</td>
                                <td>{river.location}</td>
                                <td>{river.pollution_index}</td>
                                <td>{river.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Завантаження даних...</p>
            )}
        </div>
    );
};

export default Evaluation;
