import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getWaterBodies } from '../api'; // Імпортуємо функцію для API-запитів
import axios from 'axios'; // Для динамічного запиту до нового API

const WaterEvaluation = () => {
    const [waterBodies, setWaterBodies] = useState([]);
    const [selectedWaterBody, setSelectedWaterBody] = useState(null);
    const [reports, setReports] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [aggregatedQuality, setAggregatedQuality] = useState([]);

    // Завантаження списку водойм
    useEffect(() => {
        const fetchWaterBodies = async () => {
            try {
                const data = await getWaterBodies();
                setWaterBodies(data);
                if (data.length > 0) {
                    setSelectedWaterBody(data[0]); // Вибираємо першу водойму за замовчуванням
                }
            } catch (error) {
                console.error('Помилка під час отримання водойм:', error);
            }
        };

        fetchWaterBodies();
    }, []);

    // Завантаження звітів для вибраної водойми за період
    const fetchReports = async () => {
        if (selectedWaterBody && startDate && endDate) {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/water-quality/${selectedWaterBody.id}/quality-reports/`,
                    { params: { start_date: startDate, end_date: endDate } }
                );
                setReports(response.data.reports || []);
                setAggregatedQuality(response.data.aggregated_quality || []);
            } catch (error) {
                console.error('Помилка під час отримання звітів:', error);
                setReports([]);
                setAggregatedQuality([]);
            }
        }
    };

    // Зміна вибраної водойми
    const handleWaterBodyChange = (event) => {
        const selectedId = event.target.value;
        const waterBody = waterBodies.find((body) => body.id === parseInt(selectedId, 10));
        setSelectedWaterBody(waterBody);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Оцінка стану води</h1>

            {/* Dropdown для вибору водойми */}
            <div className="mb-6 text-center">
                <label htmlFor="water-body-select" className="mr-2 font-bold text-gray-700">
                    Виберіть водойму:
                </label>
                <select
                    id="water-body-select"
                    className="p-2 border rounded"
                    onChange={handleWaterBodyChange}
                    value={selectedWaterBody?.id || ''}
                >
                    {waterBodies.map((body) => (
                        <option key={body.id} value={body.id}>
                            {body.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Дата для звітів */}
            <div className="mb-6 text-center">
                <label className="mr-2 font-bold text-gray-700">Період:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 border rounded mr-2"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-2 border rounded mr-2"
                />
                <button
                    onClick={fetchReports}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition-all"
                >
                    Завантажити звіти
                </button>
            </div>

            {/* Таблиця звітів */}
            {reports.length > 0 ? (
                <div className="overflow-x-auto mb-8">
                    <table className="table-auto w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-lg">
                        <thead className="bg-blue-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-blue-600">Дата</th>
                            <th className="border border-gray-300 px-4 py-2 text-blue-600">Рівень забруднення</th>
                            <th className="border border-gray-300 px-4 py-2 text-blue-600">pH</th>
                            <th className="border border-gray-300 px-4 py-2 text-blue-600">Температура</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reports.map((report) => (
                            <tr key={report.id} className="hover:bg-blue-50">
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">{report.date}</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                                    {report.pollution_level.toFixed(2)}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">{report.ph_level.toFixed(2)}</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">{report.temperature.toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-700">Немає доступних звітів для цього періоду.</p>
            )}

            {/* Графік звітів */}
            {aggregatedQuality.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-center mb-4 text-blue-600">Графік забруднення</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={aggregatedQuality} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tick={{ fill: '#3b82f6' }} />
                                <YAxis tick={{ fill: '#3b82f6' }} />
                                <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }} />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="quality.score"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WaterEvaluation;
