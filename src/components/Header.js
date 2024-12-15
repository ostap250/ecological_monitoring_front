import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Система оцінювання екологічної безпеки річкових водойм Львівської області</h1>
            <nav>
                <ul>
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/evaluation">Оцінка стану водойм</Link></li>
                    <li><Link to="/methodology">Методологія</Link></li>
                    <li><Link to="/reports">Аналітичні звіти</Link></li>
                    <li><Link to="/contacts">Контакти</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
