import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faDroplet } from '@fortawesome/free-solid-svg-icons'; // Іконка краплі води

const Header = () => (
    <header className="bg-blue-500 text-white py-4">
        <nav className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faDroplet} className="w-8 h-8" />
                <span className="text-xl font-bold">Water Quality App</span>
            </div>
            <ul className="flex space-x-4">
                <li><Link className="hover:underline" to="/">Карта</Link></li>
                <li><Link className="hover:underline" to="/water-evaluation">Забруднення води</Link></li>
                <li><Link className="hover:underline" to="/reports">Звіти</Link></li>
                <li><Link className="hover:underline" to="/contacts">Контакти</Link></li>
                <li><Link className="hover:underline" to="/about-us">Про Нас</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
