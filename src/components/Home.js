import React from 'react';

const Home = () => {
    return (
        <section className="intro">
            <h2>Про проєкт</h2>
            <p>Цей проєкт призначений для моніторингу та оцінки екологічного стану річкових водойм Львівської області. Мета проєкту — виявлення екологічних ризиків і розробка рекомендацій для поліпшення стану довкілля.</p>
            <a href="/evaluation" className="button">Перейти до оцінки стану водойм</a>
        </section>
    );
}

export default Home;
