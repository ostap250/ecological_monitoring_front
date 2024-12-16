import React from 'react';

const Contacts = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Контакти</h2>
            <p className="text-center text-gray-700 mb-6">Зв'яжіться з нами для отримання додаткової інформації чи співпраці:</p>
            <div className="flex flex-col items-center space-y-4">
                <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
                    <h3 className="text-lg font-semibold text-blue-500">Електронна пошта:</h3>
                    <p className="text-gray-700">info@ecomonitor.lviv.ua</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
                    <h3 className="text-lg font-semibold text-blue-500">Телефон:</h3>
                    <p className="text-gray-700">+380 32 123 4567</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
                    <h3 className="text-lg font-semibold text-blue-500">Адреса:</h3>
                    <p className="text-gray-700">вул. Грушевського, 12, Львів, Україна</p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <a
                    href="mailto:info@ecomonitor.lviv.ua"
                    className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition-all"
                >
                    Написати нам
                </a>
            </div>
        </div>
    );
};


export default Contacts;
