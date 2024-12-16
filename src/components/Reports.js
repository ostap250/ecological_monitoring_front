import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    // Завантаження звітів
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/report-files/');
                setReports(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Помилка під час отримання звітів:', error);
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Аналітичні звіти</h1>

            {loading ? (
                <p className="text-center text-gray-700">Завантаження звітів...</p>
            ) : reports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reports.map((report) => (
                        <div
                            key={report.id}
                            className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h2 className="text-xl font-semibold text-blue-500 mb-4">{report.title}</h2>
                            <p className="text-gray-700 mb-4">Завантажено: {new Date(report.uploaded_at).toLocaleDateString()}</p>
                            <a
                                href={report.file}
                                className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded inline-block transition-all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Переглянути звіт
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-700">Немає доступних звітів.</p>
            )}
        </div>
    );
};

export default Reports;
