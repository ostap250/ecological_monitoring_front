import React from 'react';


const AboutUs = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Про нас</h1>
            <div className="text-gray-700 space-y-6 max-w-4xl mx-auto">
                <p>
                    У <span className="font-bold text-blue-500">Water Quality App</span> ми прагнемо підвищити розуміння та усвідомлення проблем якості води по всій Україні. Наша місія — надавати точні дані, глибокий аналіз та дієві рішення для захисту та покращення наших життєво важливих водних ресурсів.
                </p>
                <p>
                    Заснована у 2023 році, наша команда екологів, аналітиків даних і програмістів працює спільно, щоб моніторити якість води, визначати ризики та підтримувати сталий розвиток. Ми віримо, що чиста вода — це не лише екологічна мета, але й основне право людини.
                </p>
                <p>
                    Завдяки інноваційним інструментам та партнерству з місцевими громадами ми прагнемо створити довготривалий вплив. Наша платформа дозволяє користувачам відстежувати тенденції якості води, отримувати аналітичні звіти та брати участь у дискусіях про захист водних шляхів.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-blue-500">Наше бачення</h2>
                        <p>Забезпечити кожному доступ до чистої та безпечної води, сприяючи здоровим громадам і екосистемам.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-blue-500">Наша місія</h2>
                        <p>Надавати надійні дані та інноваційні інструменти, які допоможуть людям і організаціям діяти для покращення якості води.</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a href="/contacts" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition-all">
                        Зв'яжіться з нами
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;